import { IPoint, Point } from '@pixi/math';
import { Sprite } from '@pixi/sprite';
import { Control } from '../controls';
import { GraphicsFactory } from '../services/graphics-factory';
import { DynamicGraphics, DynamicOptions } from './dynamic-graphics';

export interface ControlledOptions extends DynamicOptions {
  speed: number;
  angularSpeed: number;
  tint?: number;
  scale: number;
}

export class ControlledGraphics<T extends Control> extends DynamicGraphics {
  public onRemove: Set<() => void> = new Set();

  public get zIndex(): number {
    return 2;
  }

  private readonly control: T;

  constructor(
    private readonly factory: GraphicsFactory,
    private readonly graphics: Sprite,
    public readonly options: ControlledOptions,
    control: (target) => T
  ) {
    super();
    this.addChild(this.graphics);
    this.control = control(this);
    if (options.tint) this.graphics.tint = this.options.tint;
    this.graphics.scale.set(this.graphics.scale.x * this.options.scale);
  }

  public update(delta: number, mouse: IPoint): void {
    this.control.update(delta, mouse);
  }

  public cleanup(): void {
    const {
      parent,
      position: { x, y },
    } = this;
    if (!parent) return;
    this.control.cleanup();
    for (let cb of this.onRemove.values()) cb();
    const explosion = parent.addChild(this.factory.getExplosion(x, y));
    explosion.onComplete = () => {
      parent.removeChild(explosion);
    };
  }

  public shoot(): void {
    if (!this.parent) return;
    this.parent.addChild(this.factory.getProjectile(this));
  }

  public move(delta: number, target: IPoint) {
    const step = new Point(
      Math.cos(this.rotation) * this.options.speed * delta,
      Math.sin(this.rotation) * this.options.speed * delta
    );
    this.position.x += step.x;
    this.position.y += step.y;
    const targetRotation = Math.atan2(
      target.y - this.position.y,
      target.x - this.position.x
    );

    const angle = Math.atan2(
      Math.sin(targetRotation - this.rotation),
      Math.cos(targetRotation - this.rotation)
    );
    const prefix = angle / Math.abs(angle || 1);
    const rotation =
      prefix * Math.min(Math.abs(angle), this.options.angularSpeed);

    this.rotation = (this.rotation + rotation) % (Math.PI * 2);
  }

  public isOutOfBounds(): boolean {
    return false;
  }
}
