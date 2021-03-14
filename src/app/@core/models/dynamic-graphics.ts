import { Container } from '@pixi/display';
import { GAME_HEIGHT, GAME_WIDTH } from '../constants';

export interface DynamicOptions {
  boundingRadius: number;
}

export abstract class DynamicGraphics extends Container {
  public options: DynamicOptions;

  public constructor(
    public readonly hash: string = Math.random().toString(36).substring(7)
  ) {
    super();
  }

  public isOutOfBounds(): boolean {
    return (
      Math.abs(this.position.x - GAME_WIDTH / 2) > GAME_WIDTH / 2 ||
      Math.abs(this.position.y - GAME_HEIGHT / 2) > GAME_HEIGHT / 2
    );
  }

  public hitTest(other: DynamicGraphics): boolean {
    if (this.hash === other.hash) return false;
    const dist = Math.sqrt(
      Math.pow(this.position.x - other.position.x, 2) +
        Math.pow(this.position.y - other.position.y, 2)
    );
    return dist < this.options.boundingRadius + other.options.boundingRadius;
  }

  public cleanup(): void {
    /** @empty */
  }
}
