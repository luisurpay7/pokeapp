import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IMyPokemon, IPokemon, IPokemonList, Result } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly pokeApiUrl = environment.pokeApiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IMyPokemon[]> {
    return this.http.get<IPokemonList>(`${this.pokeApiUrl}/pokemon`).pipe(
      map((response: IPokemonList) => {
        return response.results.map((pokemon: Result, index: number) => {
          return {
            id: index + 1,
            name: pokemon.name,
            // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
            status: 0,
          };
        });
      }),
    );
  }

  getById(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.pokeApiUrl}/pokemon/${id}`);
  }
}
