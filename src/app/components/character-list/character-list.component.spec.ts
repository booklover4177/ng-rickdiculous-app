import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ CharacterListComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CharacterListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
  });

  httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
