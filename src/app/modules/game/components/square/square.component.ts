import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  value: string;
  @Output() squareClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit() {
  }

  onClick() {
    this.value = 'X';
    this.squareClick.emit(this.value);
  }
}
