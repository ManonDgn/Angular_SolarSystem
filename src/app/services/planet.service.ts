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
    description: 'Mercure est la planète la plus proche du Soleil et la moins massive du Système solaireN 1. Son éloignement au Soleil est compris entre 0,31 et 0,47 unité astronomique (soit 46 et 70 millions de kilomètres), ce qui correspond à une excentricité orbitale de 0,2 — plus de douze fois supérieure à celle de la Terre, et de loin la plus élevée pour une planète du Système solaire' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/mercury_new.png',
    },
    {
    id: 2,
    name: 'Vénus',
    description: 'Vénus est la deuxième planète du Système solaire par ordre d\'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l\'amour.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/venus_jg.png',
    },
    {
    id: 3,
    name: 'Terre',
    description: 'La Terre est la troisième planète par ordre d\'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/earth.png',
    },
    {
    id: 4,
    name: 'Mars',
    description: 'Mars  est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/mars.png',
    },
    {
    id: 5,
    name: 'Jupiter',
    description: 'Jupiter est la cinquième planète du Système solaire par ordre d\'éloignement au Soleil, et la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/jupiter_new.png',
    },
    {
    id: 6,
    name: 'Saturne',
    description: 'Saturne est la sixième planète du Système solaire par ordre d\'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/saturn.png',
    },
    {
    id: 7,
    name: 'Uranus',
    description: 'Uranus est la septième planète du Système solaire par ordre d\'éloignement du Soleil.' ,
    moons: '-',
    satellites: '-',
    imgUrl: '../../assets/uranus.png',
    },
    {
    id: 8,
    name: 'Neptune',
    description: 'Neptune est la huitième planète par ordre d\'éloignement au Soleil et la plus éloignée connue du Système solaire.' ,
    moons: '-',
    satellites: '-',
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
