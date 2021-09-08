import { Component, OnInit } from '@angular/core';
import { EpisodeDetailsComponent } from '../episode-details/episode-details.component';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css'],
})
export class EpisodePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
