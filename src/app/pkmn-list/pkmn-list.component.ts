import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  constructor(private pkmnService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.pkmnService.getPkmnSync();
  }

  pokemons: Pokemon[] = [];

}
