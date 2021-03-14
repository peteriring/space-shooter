import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LevelingComponent, ScoringComponent } from 'src/app/@core/components';
import { GameoverModule } from '../@core/components/gameover/gameover.module';

import { GameComponent } from './game.component';
import { GameRoutes } from './game.routes';

@NgModule({
  declarations: [GameComponent, ScoringComponent, LevelingComponent],
  providers: [],
  imports: [CommonModule, GameoverModule, GameRoutes],
  bootstrap: [GameComponent],
})
export class GameModule {}
