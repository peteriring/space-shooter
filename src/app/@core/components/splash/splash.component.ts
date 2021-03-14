import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'splash-component',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  animations: [
    trigger('isLoading', [
      state('true', style({ opacity: 1, display: 'flex' })),
      state('false', style({ opacity: 0, display: 'none' })),
      transition('0 <=> 1', [
        style({ display: 'flex' }),
        animate('200ms ease'),
      ]),
    ]),
  ],
})
export class SplashComponent {
  @Input()
  @HostBinding('@isLoading')
  public isLoading: boolean;
}
