import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PlanetModel } from '../models/planet.model';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planet!: PlanetModel;
  
  constructor(
    private router : Router) {
  }


  ngOnInit(): void {
  }
  viewPlanet(): void {
    this.router.navigateByUrl(`solarsystem/${this.planet.id}`);
  }
}
