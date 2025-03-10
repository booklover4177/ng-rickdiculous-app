import { Component, OnInit } from '@angular/core';
import { PageIndexService } from 'src/app/page-index.service';
import { Episodes } from '../../episode';
import { EpisodeData } from '../../episode';
import { UrlServiceService } from '../../url-service.service';
import { HttpClient } from '@angular/common/http';
import { Characters } from 'src/app/characters';
import { CharacterData } from 'src/app/characters';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  index: number = -1;
  episode: EpisodeData;
  characterData: CharacterData[];

  constructor(
    private urlService: UrlServiceService,
    private http: HttpClient,
    private pageIndexService: PageIndexService
  ) {}

  ngOnInit(): void {
    this.pageIndexService.getIndex().subscribe((data) => (this.index = data));

    this.urlService
      .getOneEpisodeData(this.index)
      .subscribe((data) => (this.episode = data));
  }

  // GetCharacterIds() {
  //   this.characterIds = [];

  //   for (let i = 0; i < this.episode.characters.length; i++) {
  //     let newArray = this.episode.characters[i].split(
  //       'https://rickandmortyapi.com/api/character/'
  //     );
  //     let id = parseInt(newArray[0]);
  //     this.characterIds.push(id);
  //   }
  // }
}
