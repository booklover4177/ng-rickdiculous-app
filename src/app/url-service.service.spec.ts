import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlServiceService } from './url-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { info } from 'node:console';
import { Episode } from './episode';
import EPISODEDATA from './episodedata.json';

describe('UrlServiceService', () => {
  let service: UrlServiceService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [UrlServiceService]
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request to right webpage', ()=>{

    service.getAllEpisodeData().subscribe(); // start request

    httpTestController.expectOne('https://rickandmortyapi.com/api/episode');
    httpTestController.verify();
  })

  it('should get all episodes', ()=>{

    service.getAllEpisodeData().subscribe(data => {
      expect(data.results).toEqual(EPISODEDATA);});



  })
});
