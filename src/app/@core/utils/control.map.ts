import { DisplayObject } from '@pixi/display';
import { Control } from '../controls';

export class ControlMap extends Map<DisplayObject, Control> {
  public set(control): this {
    return super.set(control.target, control);
  }

  public delete(key: DisplayObject): boolean {
    if (this.has(key)) this.get(key).cleanup();
    return super.delete(key);
  }
}
