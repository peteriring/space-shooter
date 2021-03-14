import { DisplayObject } from '@pixi/display';
import { IPoint } from '@pixi/math';
import { ControlledGraphics } from '../models/controlled-graphics';

export abstract class Control {
  public abstract readonly target: DisplayObject;

  public abstract update(delta: number, mouse: IPoint): void;

  public abstract cleanup(): void;
}

export interface Class<T> {
  new (...args: any[]): T;
}

export function ControlFactory<T extends Control>(
  Ctor: Class<T>,
  ...args: any[]
): (target: ControlledGraphics<T>) => T {
  return (target) => new Ctor(target, ...args);
}
