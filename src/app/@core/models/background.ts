import { Texture } from '@pixi/core';
import { Container } from '@pixi/display';
import { TilingSprite } from '@pixi/sprite-tiling';
import { GAME_HEIGHT, GAME_WIDTH } from '../constants';
import { Random } from '../utils';

class BackgroundLayer extends TilingSprite {
  constructor(texture: Texture, private readonly coefficient: number) {
    super(texture, GAME_WIDTH, GAME_HEIGHT);
    this.position.set(0, 0);
  }

  public update(delta: number): void {
    this.tilePosition.x -= delta * this.coefficient;
  }
}

export class Background extends Container {
  private readonly random: Random;

  public get zIndex(): number {
    return 0;
  }

  public children: Array<BackgroundLayer>;

  constructor(private readonly seed: number, ...textures: Array<Texture>) {
    super();
    this.random = new Random(this.seed);
    this.addChild(
      ...textures.map((texture, i) => {
        const child = new BackgroundLayer(texture, 0.5 * (i + 1));
        child.tilePosition.set(
          this.random.next() * GAME_WIDTH,
          this.random.next() * GAME_HEIGHT
        );
        return child;
      })
    );
  }

  public update(delta: number): void {
    this.children.forEach((child) => child.update(delta));
  }
}
