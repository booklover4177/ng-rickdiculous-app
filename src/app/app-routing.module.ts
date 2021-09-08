import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'app-episode-details', component: EpisodeDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
