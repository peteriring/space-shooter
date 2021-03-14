import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'leveling-component',
  templateUrl: './leveling.component.html',
  styleUrls: ['./leveling.component.scss'],
  animations: [
    trigger('levelUp', [
      state('true', style({ opacity: 1, display: 'flex' })),
      state('false', style({ opacity: 0, display: 'none' })),
      transition('0 <=> 1', [
        style({ display: 'flex' }),
        animate('500ms ease'),
      ]),
    ]),
  ],
})
export class LevelingComponent {
  @Input('level')
  public set level(value: number) {
    if (this._level !== value) this.levelUp = true;
    this._level = value;
  }
  public get level(): number {
    return this._level;
  }
  private _level: number = 1;

  @HostBinding('@levelUp')
  private set levelUp(value: boolean) {
    this._levelUp = value;
    if (value) setTimeout(() => (this.levelUp = false), 1000);
  }
  private get levelUp(): boolean {
    return this._levelUp;
  }
  private _levelUp: boolean = false;
}
