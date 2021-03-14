import { Container } from '@pixi/display';
import { IPoint } from '@pixi/math';
import { ControlledGraphics } from 'src/app/@core/models/controlled-graphics';
import { AiControl } from './ai.control';

export class AiFollowShooterControls extends AiControl {
  private lastAngle: number = 0;
  private cooldownEnds: number = 0;

  public constructor(
    public readonly target: ControlledGraphics<any>,
    public readonly aimList: Array<ControlledGraphics<any>>,
    public seed: number
  ) {
    super(seed);
    this.aim = { parent: null, position: target.position };
  }

  public update(delta: number): void {
    const now = Date.now();
    if (this.shouldGetNewAim(this.aim)) {
      this.aim = this.getNewAim();
    }
    if (this.aim.parent) {
      if (
        Math.abs(this.lastAngle - this.target.rotation) < 0.01 &&
        now > this.cooldownEnds
      ) {
        this.target.shoot();
        this.cooldownEnds = now + 1000;
      }
      this.lastAngle = this.target.rotation;
    }
    const { x, y } = this.aim.position;
    this.target.move(delta, { x, y } as IPoint);
  }

  protected getNewAim(): {
    parent: Container;
    position: { x: number; y: number };
  } {
    const array = this.aimList.filter(
      (child) => !!child.parent && child !== this.target
    );
    if (array.length === 0) return super.getNewAim();
    return array[this.random.nextInt() % array.length];
  }
}
