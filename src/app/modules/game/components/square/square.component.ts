import { Component, OnInit } from '@angular/core';
import { BoardUpdaterService } from 'src/app/services/board-updater.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  public xIsNext: boolean;
  public squareValue: string = null;

  constructor(private boardUpdaterService: BoardUpdaterService) {
    // The child subscribes to determine what value should be entered on the next click
    boardUpdaterService.boardClicked$.subscribe(
      xIsNext => {
        this.xIsNext = xIsNext;
      });
  }

  ngOnInit() {
  }

  onClick() {
    // tslint:disable-next-line: max-line-length
    // Determine which value should be entered into the square based on the value received from the parent service, and then invert the value for the next click.
    this.squareValue = this.xIsNext ? 'X' : 'O';
    this.boardUpdaterService.updateClickValue(!this.xIsNext);
  }
}
