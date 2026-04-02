import { Component } from '@angular/core';
import { IMyPokemon, IPokemon } from '../../../core/interfaces';
import { PokemonService } from '../../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemones: IMyPokemon[] = [];
  dataPokemon: IPokemon = {} as IPokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getAll().subscribe((response) => {
      this.pokemones = response;
    });
  }

  showModal(id: number) {
    this.pokemonService.getById(id).subscribe((response) => {
      this.dataPokemon = response;
      const element = document.getElementById('pokemonModal');
      if (element) {
        element.style.display = 'block';
      }
    });
  }

  closeModal() {
    const element = document.getElementById('pokemonModal');
    if (element) {
      element.style.display = 'none';
    }
  }
}
