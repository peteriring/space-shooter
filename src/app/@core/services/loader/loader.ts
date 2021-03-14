import { Loader as AssetLoader, Texture } from 'pixi.js';
import { Injectable } from '@angular/core';

@Injectable()
export class Loader extends AssetLoader {
  public readonly baseUrl = 'assets/sprites';

  private isCompleted: boolean = false;

  private callbacks: Array<Function> = [];

  public constructor() {
    super();
    this.add('bg_far', 'city.png');
    this.add('bg_mid', 'cloud_02.png');
    this.add('bg_near', 'cloud.png');
    this.add('ship', 'ship.png');
    this.add('trail', 'trail.png');
    this.add('explosion', 'mc.json');
    this.load();

    this.onComplete.add(() => this.completed());
  }

  public get(hash: string): Texture {
    if (this.loading)
      throw new Error(
        `Loader did not finish when the following resource was requested ${hash}`
      );
    const resource: { texture: Texture } = this.resources[hash] as any;
    return resource.texture;
  }

  public getAnimation(hash: string): Array<Texture> {
    if (this.loading)
      throw new Error(
        `Loader did not finish when the following resource was requested ${hash}`
      );
    return Object.keys(this.resources[hash].data.frames)
      .sort()
      .map((frame) => Texture.from(frame));
  }

  public whenCompleted(cb: Function) {
    this.callbacks.push(cb);
    if (this.isCompleted) this.callCallbacks();
  }

  private callCallbacks() {
    this.callbacks.forEach((cb) => cb());
    this.callbacks = [];
  }

  private completed() {
    this.isCompleted = true;
    this.callCallbacks();
  }
}
