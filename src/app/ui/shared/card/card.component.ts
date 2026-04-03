import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMyPokemon, IPokemon } from '../../../core/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() pokemon: IMyPokemon = {} as IMyPokemon;
  @Input() numero: number = 0;
  dataPokemon: IPokemon = {} as IPokemon;
  @Output() showModal: EventEmitter<number> = new EventEmitter<number>();

  openModal() {
    this.showModal.emit(this.pokemon.id);
  }

  closeModal() {
    const element = document.getElementById('myModal');
    if (element) {
      element.style.display = 'none';
    }
  }
}
