import { BoardUpdaterService } from './../../../../services/board-updater.service';
import { SquareComponent } from './../square/square.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';

export interface IHistory {
  squares: Array<string>;
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
    squares: new Array(9).fill(null),
    stepNumber: 0,
    xIsNext: true
  };

  constructor(private boardUpdaterService: BoardUpdaterService) {
    // The parent subscribes to determine the next value to record for the history
    boardUpdaterService.boardUpdated$.subscribe(
      currentBoard => {
        // console.log(currentBoard);
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
        return squares[a];
      }
    });
  }
}
