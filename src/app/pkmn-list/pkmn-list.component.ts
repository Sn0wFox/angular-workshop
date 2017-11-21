import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pokemons: Pokemon[] = [
    {
      name: 'Bulbasaur',
      id: 1
    },
    {
      name: 'Ivysaur',
      id: 2
    }];

}
