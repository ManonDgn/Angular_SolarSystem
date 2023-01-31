import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PlanetModel } from '../models/planet.model';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-single-planet',
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.css']
})
export class SinglePlanetComponent implements OnInit {

  planet!: PlanetModel;

  constructor(
    private planetService : PlanetService,
    private route : ActivatedRoute) {
  }
  ngOnInit()  {
    const planetId = +this.route.snapshot.params['id'];
    this.planet = this.planetService.getPlanetById(planetId)
  }
}
