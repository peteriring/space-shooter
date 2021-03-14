import { IPoint } from '@pixi/math';
import { ControlledGraphics } from 'src/app/@core/models/controlled-graphics';
import { Control } from '../control';

export class PlayerControls extends Control {
  public constructor(
    public readonly target: ControlledGraphics<PlayerControls>
  ) {
    super();
    document.addEventListener('click', this._onClick);
  }

  private _onClick = () => this.target.shoot();

  public update(delta: number, mouse: IPoint): void {
    this.target.move(delta, mouse);
  }

  public cleanup(): void {
    document.removeEventListener('click', this._onClick);
  }
}
