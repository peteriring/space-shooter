import { Component } from '@angular/core';

@Component({
  selector: 'background-component',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {
  public readonly circles = Array(10).fill('');
}
