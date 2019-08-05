import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '612ebf63e580831559365d1bc93af503';
  constructor() { }

  /**
   * Récupère tous les films populaires
   * https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503&language=fr-FR&page=1
   */
  getPopularMovies(){}

  /**
   * Récupère les détails d'un film
   */
  getMovie(id: number){}

}
