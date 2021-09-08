import { Component, OnInit } from '@angular/core';
import { Episode } from '../../episode';
import { EpisodeData } from '../../episode';
import { UrlServiceService } from '../../url-service.service';
import { HttpClient } from '@angular/common/http';
import { PageIndexService } from 'src/app/page-index.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  // episodes: Episode[]=[new Episode(0, "test", "1/1/00", "test ep", ["Rick"], "testurl", "testcreated")];
  episodes: Episode;
  //selectedEpisode: number = -1;

  constructor(
    private urlService: UrlServiceService,
    private http: HttpClient,
    private pageIndexService: PageIndexService
  ) {}

  ngOnInit(): void {
    this.urlService
      .getAllEpisodeData()
      .subscribe((data) => (this.episodes = data));
    // this.dogService.alldogs().subscribe(data => this.dogs = data);
  }

  showEpisode(i: number) {
    console.log('Show episode: ' + (i + 1));
    //this.selectedEpisode = i + 1;

    this.pageIndexService.changeIndex(i + 1);
  }
}
