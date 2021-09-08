import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageIndexService {
  private currentIndex: number = -1;

  constructor() {}

  changeIndex(index: number) {
    this.currentIndex = index;
  }

  getIndex(): Observable<number> {
    return of(this.currentIndex);
  }
}
