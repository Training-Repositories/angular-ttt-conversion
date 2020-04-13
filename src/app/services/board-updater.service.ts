import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// tslint:disable-next-line: max-line-length
// Rather than incrementally step between each Parent-Child component from the top level Game to the bottom level Square component, a service can be created as an intermediary to go between them. In this way, the parent and child can subscribe as necessary and update eachother.

@Injectable({
  providedIn: 'root'
})
export class BoardUpdaterService {

constructor() { }
  // Observable sources
  private boardClicked = new Subject<boolean>();
  private boardUpdated = new Subject<Array<string>>();

  // Observable streams
  boardClicked$ = this.boardClicked.asObservable();
  boardUpdated$ = this.boardUpdated.asObservable();

  // Service commands
  updateClickValue(xIsNext: boolean) {
    this.boardClicked.next(xIsNext);
  }

  updateBoardHistory(squares: Array<string>) {
    this.boardUpdated.next(squares);
  }
}
