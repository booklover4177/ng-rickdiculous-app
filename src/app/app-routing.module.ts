import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';

const routes = [
  { path: '/:page', component: HomeComponent },
  //{ path: 'app-episode-details', component: EpisodeDetailsComponent },
  { path: 'app-episode-page/:id', component: EpisodePageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
