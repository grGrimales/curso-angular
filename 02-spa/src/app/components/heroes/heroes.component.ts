import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private HEROES_SERVICE: HeroesService) {
  console.log('constructor');
  }

  ngOnInit() {
     this.heroes = this.HEROES_SERVICE.getHeroes();
     console.log( this.heroes );

  }

}
