import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMyPokemon } from './interfaces/mypokemon.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { IPokemon } from './interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMyPokemon[]>{
    return this.http.get<IMyPokemon[]>(`${environment.myPokeApiUrl}/pokemon`);
  }

  getById(id: number): Observable<IPokemon>{
    return this.http.get<IPokemon>(`${environment.pokeApiUrl}/pokemon/${id}`);
  }
}
