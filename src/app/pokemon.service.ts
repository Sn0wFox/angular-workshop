import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";

@Injectable()
export class PokemonService {

  constructor() { }

  getPkmnSync(): Pokemon[] {
    return [
      {
        name: 'Bulbasaur',
        id: 1
      },
      {
        name: 'Ivysaur',
        id: 2
      }];
  }

}
