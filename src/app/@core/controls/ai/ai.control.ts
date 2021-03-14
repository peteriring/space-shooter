import { Container } from '@pixi/display';
import { GAME_HEIGHT, GAME_WIDTH } from 'src/app/@core/constants';
import { Random } from 'src/app/@core/utils';
import { Control } from '../control';

export interface Aim {
  parent: Container;
  position: { x: number; y: number };
}

export abstract class AiControl extends Control {
  public readonly random: Random;

  protected aim: Aim;

  public constructor(public readonly seed: number) {
    super();
    this.random = new Random(this.seed);
  }

  public cleanup(): void {
    /** @empty */
  }

  protected shouldGetNewAim(aim: Aim): boolean {
    const dist = Math.sqrt(
      Math.pow(this.target.position.x - aim.position.x, 2) +
        Math.pow(this.target.position.y - aim.position.y, 2)
    );
    return dist < 5;
  }

  protected getNewAim(): Aim {
    return {
      parent: null,
      position: {
        x: this.random.nextInt() % GAME_WIDTH,
        y: this.random.nextInt() % GAME_HEIGHT,
      },
    };
  }
}
