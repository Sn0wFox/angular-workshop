import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.scss']
})
export class PkmnListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pokemons = [
    {
      name: 'Bulbasaur',
      id: 1
    },
    {
      name: 'Ivysaur',
      id: 2
    }];

}
