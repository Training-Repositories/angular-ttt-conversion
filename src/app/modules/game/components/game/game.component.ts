import { SquareComponent } from './../square/square.component';
import { Component, OnInit } from '@angular/core';

export interface IHistory {
  squares: Array<string>;
  stepNumber: number;
  xIsNext: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  history: IHistory = {
    squares: new Array(9).fill(null),
    stepNumber: 0,
    xIsNext: true
  };

  constructor() { }

  ngOnInit() {
  }
}
