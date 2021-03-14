import { IPoint } from '@pixi/math';
import { ControlledGraphics } from 'src/app/@core/models/controlled-graphics';
import { AiControl } from './ai.control';

export class AiRandomControls extends AiControl {
  public constructor(
    public readonly target: ControlledGraphics<any>,
    public seed: number
  ) {
    super(seed);
    this.aim = this.getNewAim();
  }

  public update(delta: number): void {
    if (this.shouldGetNewAim(this.aim)) {
      this.aim = this.getNewAim();
    }
    const { x, y } = this.aim.position;
    this.target.move(delta, { x, y } as IPoint);
  }
}
