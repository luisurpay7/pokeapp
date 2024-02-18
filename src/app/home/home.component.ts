import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../intefaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemones: IPokemon[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getAll().subscribe(response => {
      // console.log(response)
      this.pokemones = response;
    });
  }
}
