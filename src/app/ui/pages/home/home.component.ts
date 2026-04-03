import { Component } from '@angular/core';
import {
  IMyPokemon,
  IPokemon,
  PaginatedResponse,
} from '../../../core/interfaces';
import { PokemonService } from '../../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data?: PaginatedResponse<IMyPokemon>;
  dataPokemon: IPokemon = {} as IPokemon;

  limit: number = 24;
  offset: number = 0;
  searchTerm?: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.pokemonService
      .getAll(this.limit, this.offset, this.searchTerm)
      .subscribe((response) => {
        this.data = response;
      });
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.cargarData();
    }
  }

  nextPage() {
    this.offset += this.limit;
    this.cargarData();
  }

  onPageSizeChange(event: Event) {
    this.limit = Number((event.target as HTMLSelectElement).value);
    this.offset = 0;
    this.cargarData();
  }

  searchPokemon(searchTerm: string) {
    this.offset = 0;
    this.limit = 24;
    this.searchTerm = searchTerm;
    this.cargarData();
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
