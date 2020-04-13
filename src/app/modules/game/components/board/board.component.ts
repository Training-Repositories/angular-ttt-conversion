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
      () => this.obtainCurrentBoardState()
    );
  }

  ngOnInit() {
  }

  obtainCurrentBoardState() {
    const boardComponents = this.squares.toArray();
    const currentBoard: string[] = new Array(9);

    // Iterate over each of the children components and extract their current value
    for (const index in boardComponents) {
      if (boardComponents[index]) {
        currentBoard[index] = boardComponents[index].squareValue;
      }
    }

    // Call the service to update the parent component with the current board state
    this.boardUpdaterService.updateBoardHistory(currentBoard);
  }
}
