import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() xIsNext: boolean;  // Binds this component's value to its parent's

  constructor() {
  }

  ngOnInit() {
  }

  onSquareClicked(input) {
    console.log('test');
  }
}
