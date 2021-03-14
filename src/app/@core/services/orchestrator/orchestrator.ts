import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameComponent } from 'src/app/game/game.component';
import { EventType, GAME_CONFIG } from 'src/app/@core/constants';
import { Loader } from 'src/app/@core/services/loader';
import { Score } from 'src/app/@core/services/score';
import { Random } from 'src/app/@core/utils';
import { GraphicsFactory } from '../graphics-factory';
import { ControlledGraphics } from '../../models/controlled-graphics';

@Injectable()
export class Orchestrator {
  public readonly seed: number;

  public readonly random: Random;

  private triggerTime: number = Date.now() + 2000;

  private iteration: number = 0;

  private enemies: Array<ControlledGraphics<any>> = [];

  constructor(
    private readonly score: Score,
    private readonly loader: Loader,
    private readonly factory: GraphicsFactory,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.seed = this.activatedRoute.snapshot.params['seed'];
    this.random = new Random(this.seed);
  }

  public update(container: GameComponent) {
    const hasNext = this.hasNext();
    this.enemies = this.enemies.filter((enemy) => enemy.parent);
    if (!this.enemies.length && !hasNext) this.advanceToNewLevel();
    if (Date.now() < this.triggerTime || !hasNext) return;
    const event = this.getEvent();
    const candidates = container.children.filter(
      (child) => child instanceof ControlledGraphics
    ) as Array<ControlledGraphics<any>>;
    const enemy = container.addChild(
      this.factory.getEnemy(event.type, candidates)
    );
    this.enemies.push(enemy);
    this.iteration++;
    const next = this.getEvent();
    this.triggerTime = Date.now() + next.timeout;
  }

  private advanceToNewLevel(): void {
    this.score.level++;
    this.iteration = 0;
    this.enemies = [];
    const event = this.getEvent();
    this.triggerTime = Date.now() + event.timeout;
  }

  private hasNext(): boolean {
    const level = Math.min(this.score.level, GAME_CONFIG.length - 1);

    return this.iteration <= GAME_CONFIG[level].length - 1;
  }

  private getEvent(): { timeout: number; type: EventType } {
    const level = Math.min(this.score.level, GAME_CONFIG.length - 1);
    const iteration = Math.min(this.iteration, GAME_CONFIG[level].length - 1);
    return GAME_CONFIG[level][iteration];
  }
}
