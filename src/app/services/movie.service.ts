import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '612ebf63e580831559365d1bc93af503';
  constructor(private http: HttpClient) { }

  /**
   * Récupère tous les films populaires
   * https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503&language=fr-FR&page=1
   */
  getPopularMovies(): Promise<any> {
    // Aprés avoir reçu, on ne récupère que la clé results avec la liste des films
    return this.http.get(this.apiUrl + '/movie/popular?api_key=' + this.apiKey + '&language=fr-FR&page=1').toPromise().then(response => response.results);
  }

  /**
   * Récupère les détails d'un film
   */
  getMovie(id: number){

  }

}
