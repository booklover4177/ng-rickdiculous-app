import { Component, OnInit } from '@angular/core';
import { PageIndexService } from 'src/app/page-index.service';
import { Episodes } from '../../episode';
import { EpisodeData } from '../../episode';
import { UrlServiceService } from '../../url-service.service';
import { HttpClient } from '@angular/common/http';
import { Characters } from 'src/app/characters';
import { CharacterData } from 'src/app/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
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
      .getSpecificCharacters(this.index)
      .subscribe((data) => (this.characterData = data));
  }
}
