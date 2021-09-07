import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  // episodes: Episode[]=[new Episode(0, "test", "1/1/00", "test ep", ["Rick"], "testurl", "testcreated")];
  episodes: Episode[]=[];

  
  constructor() { }

  ngOnInit(): void {
  }

}
