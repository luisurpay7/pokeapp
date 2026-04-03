import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  IMyPokemon,
  IPokemon,
  IPokemonList,
  PaginatedResponse,
  Result,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly pokeApiUrl = environment.pokeApiUrl;

  constructor(private http: HttpClient) {}

  getAll(
    limit: number,
    offset: number,
    searchTerm?: string,
  ): Observable<PaginatedResponse<IMyPokemon>> {
    if (!searchTerm) {
      return this.getPaginated(limit, offset);
    } else {
      return this.searchPaginatedPokemons(limit, offset, searchTerm);
    }
  }

  private getPaginated(
    limit: number,
    offset: number,
  ): Observable<PaginatedResponse<IMyPokemon>> {
    return this.http
      .get<IPokemonList>(
        `${this.pokeApiUrl}/pokemon?limit=${limit}&offset=${offset}`,
      )
      .pipe(
        map((response: IPokemonList) =>
          this.mapResults(response.results, response.count, limit, offset),
        ),
      );
  }

  private searchPaginatedPokemons(
    limit: number,
    offset: number,
    searchTerm: string,
  ): Observable<PaginatedResponse<IMyPokemon>> {
    return this.http
      .get<IPokemonList>(`${this.pokeApiUrl}/pokemon?limit=2000`)
      .pipe(
        map((response: IPokemonList) => {
          const filteredResults = response.results.filter((pokemon: Result) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );

          const paginatedResults = filteredResults.slice(
            offset,
            offset + limit,
          );

          return this.mapResults(
            paginatedResults,
            filteredResults.length,
            limit,
            offset,
          );
        }),
      );
  }

  private mapResults(
    results: Result[],
    total: number,
    limit: number,
    offset: number,
  ): PaginatedResponse<IMyPokemon> {
    const items = results.map((pokemon: Result, index: number) => {
      // const startIndex = offset + 1;
      const id = Number(pokemon.url.split('/').filter(Boolean).pop());
      return {
        id,
        name: pokemon.name,
        // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        status: 0,
      };
    });

    return {
      items,
      totalItems: total,
      itemsPerPage: limit,
      currentPage: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
    };
  }

  getById(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.pokeApiUrl}/pokemon/${id}`);
  }
}
