import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMyPokemon } from '../interfaces/mypokemon.interface';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() pokemon: IMyPokemon = {} as IMyPokemon;
  @Input() numero: number = 0;
  dataPokemon: IPokemon = {} as IPokemon;
  @Output() showModal: EventEmitter<number> = new EventEmitter<number>;
  constructor(private pokemonService: PokemonService){}

  ngOnInit(){}

  openModal() {
    // const element = document.getElementById("myModal");
    // if(element){
    //   element.style.display = 'block';
    // }

    this.showModal.emit(this.pokemon.id);

    // this.pokemonService.getById(this.numero+1).subscribe(response => {
    //   console.log(response);
    //   this.dataPokemon = response;

    //   const element = document.getElementById("pokemonModal");
    //   if(element){
    //     element.style.display = 'block';
    //   }
    //   console.log(this.dataPokemon.name);

    // });
  }

  closeModal() {
    const element = document.getElementById("myModal");
    if(element){
      element.style.display = 'none';
    }
  }
}
