import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: any = {};


  constructor( private http: HttpClient) { 
    console.log('Spotify Service listo');
    
  }

  getToken( tokenGenerado: string ){
    let token = this.http.get("https://spotify-get-token-grediana.herokuapp.com/spotify/1733df18b721410eb85dadfce94e2acf/db1c7f0ced264a218759ac78667974ee")
    .subscribe( tokens => {
     
    });

  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;
   


    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBzdhc8E1NPikH7GfQCREnpdxwzkKELf2xIS6ZYw_SNgazOlecJYGH_u3EKHHqmxrBNrx8JBiU2qhqre5Y'
    });

    return this.http.get( url, { headers });

    
  }


 getNewReleases(){

  return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( (data: any) => data['albums'].items));
  
}

getArtistas ( termino: string ){

  return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5`)
    .pipe( map( (data: any) => data['artists'].items));

  
 }

 getArtista ( id: string ){

  return this.getQuery(`artists/${ id }`);
    //.pipe( map( (data: any) => data['artists'].items));

  
 }

 getTopTracks ( id: string ){

  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (data: any) => data['tracks']));

  
 }

}


