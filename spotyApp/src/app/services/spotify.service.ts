import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify Service listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCmP0JvVW3ycjVlHMpflizISFcqqr0bvA2n9kYpfkOvABt4aqJ5wIl9TdZK6FL1DhZPtjpyHN0Rw1cR8Uk'
    });

    return this.http.get( url, { headers });

  
  }


 getNewReleases(){

  return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( (data: any) => data['albums'].items));
  
}

getArtista ( termino: string ){

  return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5`)
    .pipe( map( (data: any) => data['artists'].items));

  
 }
}


