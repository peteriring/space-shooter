import { Resource, Texture } from '@pixi/core';
import { AnimatedSprite } from '@pixi/sprite-animated';

export class Explosion extends AnimatedSprite {
  public loop: boolean = false;

  public get zIndex(): number {
    return 3;
  }

  public constructor(textures: Array<Texture<Resource>>, x: number, y: number) {
    super(textures);
    this.position.set(x, y);
    this.anchor.set(0.5, 0.5);
    this.rotation = Math.random() * Math.PI;
    this.scale.set(0.75 + Math.random() * 0.5);
    this.play();
  }
}
