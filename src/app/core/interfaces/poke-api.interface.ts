export interface IPokemonList {
  count: number;
  next: string;
  previous: null | string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
}
