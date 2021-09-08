import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Episodes } from '../../episode';
import { EpisodeData } from '../../episode';
import { EpisodeListComponent } from './episode-list.component';
import { HttpClient } from '@angular/common/http';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
