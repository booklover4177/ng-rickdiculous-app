import { Component, OnInit } from '@angular/core';
import { PageIndexService } from 'src/app/page-index.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  index: number = -1;

  constructor(private pageIndexService: PageIndexService) {}

  ngOnInit(): void {
    this.pageIndexService.getIndex().subscribe((data) => (this.index = data));
    //this.dogService.alldogs().subscribe(data => this.dogs = data);
  }
}
