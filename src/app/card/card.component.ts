import { Component, Input } from '@angular/core';
import { IPokemon } from '../intefaces/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() pokemon: IPokemon = {} as IPokemon;
  @Input() numero: number = 0;

  ngOnInit(){}

  openModal() {
    const element = document.getElementById("myModal");
    if(element){
      element.style.display = 'block';
    }
  }

  closeModal() {
    const element = document.getElementById("myModal");
    if(element){
      element.style.display = 'none';
    }
  }
}
