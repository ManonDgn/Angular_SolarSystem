import { Injectable } from '@angular/core';
import { PlanetModel } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets: PlanetModel[] = [
    {
    id: 1,
    name: 'Mercure',
    description: 'Mercure est la planète la plus proche du Soleil.' ,
    type: 'tellurique',
    distance: 58,
    imgUrl: '../../assets/mercury_new.png',
    },
    {
    id: 2,
    name: 'Vénus',
    description: 'Vénus est la deuxième planète du Système solaire.' ,
    type: 'tellurique',
    distance: 108,
    imgUrl: '../../assets/venus_jg.png',
    },
    {
    id: 3,
    name: 'Terre',
    description: 'La Terre est la troisième planète du Système solaire.' ,
    type: 'tellurique',
    distance: 150,
    imgUrl: '../../assets/earth.png',
    },
    {
    id: 4,
    name: 'Mars',
    description: 'Mars  est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil.' ,
    type: 'tellurique',
    distance: 227,
    imgUrl: '../../assets/mars.png',
    },
    {
    id: 5,
    name: 'Jupiter',
    description: 'Jupiter est la cinquième planète du Système solaire.' ,
    type: 'jovienne (gazeuse)',
    distance: 778,
    imgUrl: '../../assets/jupiter_new.png',
    },
    {
    id: 6,
    name: 'Saturne',
    description: 'Saturne est la sixième planète du Système solaire.' ,
    type: 'jovienne (gazeuse)',
    distance: 1457,
    imgUrl: '../../assets/saturn.png',
    },
    {
    id: 7,
    name: 'Uranus',
    description: 'Uranus est la septième planète du Système solaire.' ,
    type: 'jovienne (gazeuse)',
    distance: 2870,
    imgUrl: '../../assets/uranus.png',
    },
    {
    id: 8,
    name: 'Neptune',
    description: 'Neptune est la huitième planète du Système solaire.' ,
    type: 'jovienne (gazeuse)',
    distance: 4500,
    imgUrl: '../../assets/neptune.png',
    },
  ];

  getAllPlanets(): PlanetModel[]{
    return this.planets;
  }

  getPlanetById(planetId: number): PlanetModel {
    const planet = this.planets.find( planet => planet.id === planetId)
    if (!planet) {
      throw new Error('Planet not found');
    } else {
      return planet;
    }
  }

  
}
