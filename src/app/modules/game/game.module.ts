import { NgModule } from '@angular/core';

import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './components/game/game.component';


@NgModule({
    declarations: [
        GameComponent,
        BoardComponent,
        SquareComponent],
    imports: [],
    exports: [
        GameComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class GameModule {}
