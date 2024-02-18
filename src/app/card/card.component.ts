import { Component, Input } from '@angular/core';
import { IPokemon } from '../intefaces/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() pokemon: IPokemon = {} as IPokemon;

  ngOnInit(){}

}
