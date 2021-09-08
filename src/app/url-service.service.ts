import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { Episode } from './episode';
import { EpisodeData } from './episode';
//import EPISODEDATA from './episodedata.json';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  constructor(private http: HttpClient) {}

  episodeInfoUrl = 'https://rickandmortyapi.com/api';
  getAllEpisodeData() {
    let epUrl = this.episodeInfoUrl + '/episode';
    return this.http.get<Episode>(epUrl);
  }

  getOneEpisodeData(index: number) {
    let epUrl = this.episodeInfoUrl + '/episode/' + index;
    return this.http.get<Episode>(epUrl);
  }
}
