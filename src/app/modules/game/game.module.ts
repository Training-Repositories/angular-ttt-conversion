import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './components/game/game.component';


@NgModule({
    declarations: [
        GameComponent,
        BoardComponent,
        SquareComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        GameComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class GameModule {}
