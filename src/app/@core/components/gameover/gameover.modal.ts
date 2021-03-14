import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gameover-modal',
  templateUrl: './gameover.modal.html',
  styleUrls: ['./gameover.modal.scss'],
})
export class GameoverModal {
  @Input()
  public readonly isHighest: boolean = false;

  @Input()
  public readonly score: number;

  constructor(public readonly activeModal: NgbActiveModal) {}
}
