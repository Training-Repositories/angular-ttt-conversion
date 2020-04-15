import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BoardUpdaterService } from './../../../../services/board-updater.service';

export interface IHistory {
  squares: string[][];
  stepNumber: number;
  xIsNext: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [BoardUpdaterService],
})
export class GameComponent implements OnInit, AfterViewInit {
  history: IHistory = {
    squares: Array<Array<string>>(0),
    stepNumber: 0,
    xIsNext: true
  };
  selectedBoardState = Array<string>(9).fill(null);

  constructor(private boardUpdaterService: BoardUpdaterService) {
    console.log(this.history.squares);

    // The parent subscribes to determine the next value to record for the history
    boardUpdaterService.boardUpdated$.subscribe(
      currentBoard => {
        this.history.squares.push(currentBoard);  // Add current board layout to the array
        this.history.stepNumber += 1;
        this.checkForWinner(currentBoard);
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Specify the initial value (X or O) to be used on the first click after all components have finished initializing
    this.boardUpdaterService.updateClickValue(this.history.xIsNext);
  }

  checkForWinner(squares: Array<string>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    lines.forEach((value, index) => {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        this.boardUpdaterService.updateWinner(true);
      }
    });
  }

  onClick(moveIndex: number) {
    // Update history to reflect the selected move sequence
    const moveState = this.history.squares.slice(0);
    this.history.squares = moveState.slice(0, moveIndex + 1);
    this.selectedBoardState = this.history.squares[this.history.squares.length - 1];
    console.log(this.selectedBoardState);
  }
}
