import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlServiceService } from './url-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { info } from 'node:console';
import { Episodes } from './episode';
import { EpisodeData } from './episode';
//import EPISODEDATA from './episodedata.json';

describe('UrlServiceService', () => {
  let service: UrlServiceService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UrlServiceService],
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request to right webpage', () => {
    service.getAllEpisodeData(1).subscribe(); // start request

    httpTestController.expectOne('https://rickandmortyapi.com/api/episode?page/1');
    httpTestController.verify();
  });

  it('should get all episodes', () => {
    service.getAllEpisodeData(1).subscribe((data) => {
      expect(data.results.length).toEqual(20);
    });
  });

  it('should get data from any episode', () => {
    service.getAllEpisodeData(1).subscribe((data) => {
      expect(data.results[0].id).toEqual(1);
      expect(data.results[0].name).toEqual('Pilot');
    });
  });
});
