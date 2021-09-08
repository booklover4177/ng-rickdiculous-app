import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { Episodes } from './episode';
import { EpisodeData } from './episode';
import { Characters } from './characters';
import { CharacterData } from './characters';
import { tap } from 'rxjs/operators';
//import EPISODEDATA from './episodedata.json';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  constructor(private http: HttpClient) {}

  mainUrl = 'https://rickandmortyapi.com/api';

  getAllEpisodeData(page: number) {
    let epUrl = this.mainUrl + '/episode?page/' + page;
    return this.http.get<Episodes>(epUrl);
  }

  getOneEpisodeData(id: number) {
    let epUrl = this.mainUrl + '/episode/' + id;
    return this.http.get<EpisodeData>(epUrl);
  }

  getSpecificCharacters(id: number) {
    let epUrl1 = this.mainUrl + '/episode/' + id;
    let epData = this.http.get<EpisodeData>(epUrl1).pipe(
      tap((data) => {
        console.log('inside of tap: ', data);
        let ids = data.characters.map((url) => {
          return url.split('/')[5];
        });

        let idString = ids.join(',');
        let newUrl = this.mainUrl + '/character/' + idString;
        console.log(newUrl);

        this.http.get<CharacterData[]>(newUrl).subscribe((data) => {
          console.log(data);
          //return data;
        });
      })
    );

    return CharacterData[0];

    //let epUrl2 = this.mainUrl + '/character/' + ;

    // for (let i = 0; i < ids.length; i++) {
    //   if (i !== 0) {
    //     epUrl2 += ',';
    //   }
    //   epUrl2 += ids[i];
    // }

    // return this.http.get<CharacterData[]>(epUrl2);

    // let ids = [];

    // for (let i = 0; i < epData.characters.length; i++) {
    //   let newArray = epData.characters[i].split(
    //     'https://rickandmortyapi.com/api/character/'
    //   );
    //   ids.push(parseInt(newArray[0]));
    // }

    // let epUrl2 = this.mainUrl + '/character/';

    // for (let i = 0; i < ids.length; i++) {
    //   if (i !== 0) {
    //     epUrl2 += ',';
    //   }
    //   epUrl2 += ids[i];
    // }

    // return this.http.get<CharacterData[]>(epUrl2);
  }
}
