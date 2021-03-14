import { Component } from '@angular/core';
import { Score } from 'src/app/@core/services';

@Component({
  selector: 'scoring-component',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss'],
})
export class ScoringComponent {
  public constructor(public readonly score: Score) {}
}
