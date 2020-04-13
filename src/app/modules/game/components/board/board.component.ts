import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BoardUpdaterService } from '../../../../services/board-updater.service';

import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit  {
  @ViewChildren(SquareComponent) squares: QueryList<SquareComponent>;

  constructor(private boardUpdaterService: BoardUpdaterService) {
    // Subscribes to the service to update the current game state and pass to its parent
    boardUpdaterService.boardClicked$.subscribe(
      () => {
        this.obtainCurrentBoardState();
        boardUpdaterService.updateBoardHistory(['test']);
      }
    );
  }

  ngOnInit() {
  }

  obtainCurrentBoardState() {
      this.squares.forEach(square => console.log(square));
  }
}
