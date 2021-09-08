import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodeListComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
