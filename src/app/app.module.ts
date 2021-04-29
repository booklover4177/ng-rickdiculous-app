import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    SearchFormComponent,
    EpisodesListComponent,
    EpisodeDetailComponent,
    SideMenuComponent,
    EpisodePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
