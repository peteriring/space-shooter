import { BLEND_MODES } from '@pixi/constants';
import { Texture } from '@pixi/core';
import { Point } from '@pixi/math';
import { SimpleRope } from '@pixi/mesh-extras';
import { GraphicsFactory } from '../services/graphics-factory';
import { ControlledGraphics } from './controlled-graphics';
import { DynamicGraphics, DynamicOptions } from './dynamic-graphics';

export interface ProjectileOptions extends DynamicOptions {
  speed: number;
}

export class Projectile extends DynamicGraphics {
  public readonly blendmode = BLEND_MODES.ADD;

  public get zIndex(): number {
    return 1;
  }

  private readonly rope: SimpleRope;

  private readonly points: Array<Point>;

  private readonly rotationAngle: number;

  private history: Array<{ x: number; y: number }>;

  constructor(
    private readonly factory: GraphicsFactory,
    private readonly owner: ControlledGraphics<any>,
    public readonly options: ProjectileOptions,
    texture: Texture
  ) {
    super(owner.hash);

    this.points = [...Array(100)].map(
      () => new Point(-owner.position.x, -owner.position.y)
    );
    this.history = new Array(20).fill({
      x: owner.position.x,
      y: owner.position.y,
    });
    this.rope = new SimpleRope(texture, this.points);
    this.position.set(owner.position.x, owner.position.y);
    this.rotationAngle = owner.rotation;
    if (this.owner.options.tint) this.rope.tint = this.owner.options.tint;
    this.addChild(this.rope);
  }

  public update(delta: number): void {
    const step = new Point(
      Math.cos(this.rotationAngle) * this.options.speed * delta,
      Math.sin(this.rotationAngle) * this.options.speed * delta
    );

    this.position.x += step.x;
    this.position.y += step.y;

    const { x, y } = this.position;
    this.history.pop();
    this.history.unshift({ x, y });
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];

      const ix =
        this.cubicInterpolation(
          this.history.map((point) => point.x),
          (i / this.points.length) * this.history.length
        ) - this.position.x;
      const iy =
        this.cubicInterpolation(
          this.history.map((point) => point.y),
          (i / this.points.length) * this.history.length
        ) - this.position.y;

      point.x = ix;
      point.y = iy;
    }
  }

  public cleanup(): void {
    const {
      parent,
      position: { x, y },
    } = this;
    if (!parent) return;
    const explosion = parent.addChild(this.factory.getExplosion(x, y));
    explosion.onComplete = () => {
      parent.removeChild(explosion);
    };
  }

  private clipInput(k: number, arr: Array<number>): number {
    if (k < 0) k = 0;
    if (k > arr.length - 1) k = arr.length - 1;
    return arr[k];
  }

  private getTangent(k: number, factor: number, array: Array<number>): number {
    return (
      (factor * (this.clipInput(k + 1, array) - this.clipInput(k - 1, array))) /
      2
    );
  }

  private cubicInterpolation(
    array: Array<number>,
    t: number,
    tangentFactor: number = 1
  ): number {
    const k = Math.floor(t);
    const m = [
      this.getTangent(k, tangentFactor, array),
      this.getTangent(k + 1, tangentFactor, array),
    ];
    const p = [this.clipInput(k, array), this.clipInput(k + 1, array)];
    t -= k;
    const t2 = t * t;
    const t3 = t * t2;
    return (
      (2 * t3 - 3 * t2 + 1) * p[0] +
      (t3 - 2 * t2 + t) * m[0] +
      (-2 * t3 + 3 * t2) * p[1] +
      (t3 - t2) * m[1]
    );
  }
}
