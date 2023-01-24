import { Component, OnInit } from '@angular/core';
import { PlanetModel } from '../models/planet.model';
import { PlanetService } from '../services/planet.service';


@Component({
  selector: 'app-solarsystem',
  templateUrl: './solarsystem.component.html',
  styleUrls: ['./solarsystem.component.css']
})
export class SolarsystemComponent implements OnInit {
  planets!: PlanetModel[];

  constructor(private PlanetService: PlanetService){
  }

  ngOnInit(){
    this.planets = this.PlanetService.getAllPlanets();
  }
}
