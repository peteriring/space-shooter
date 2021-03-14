import { Texture } from '@pixi/core';
import { Sprite } from '@pixi/sprite';

export class Ship extends Sprite {
  public constructor(texture: Texture) {
    super(texture);
    this.anchor.set(0.5, 0.5);
    this.scale.set(0.2);
  }
}
