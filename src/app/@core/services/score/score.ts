import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCORE_STORAGE_PATH } from 'src/app/@core/constants';

@Injectable()
export class Score {
  public readonly seed: number;

  public set level(value: number) {
    if (this.frozen) return;
    this._level = value;
  }

  public get level(): number {
    return this._level;
  }

  public get isHighest(): boolean {
    return this._isHighest;
  }

  public get score(): number {
    return this._score;
  }

  public get highestScore(): number {
    const scores = JSON.parse(localStorage.getItem(SCORE_STORAGE_PATH) || '{}');
    return scores[this.seed] || 0;
  }

  private _score: number = 0;

  private _isHighest: boolean = false;

  private _level: number = 0;

  private frozen: boolean = false;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.seed = this.activatedRoute.snapshot.params['seed'];
  }

  public add(): void {
    if (this.frozen) return;
    this._score += 1;
    if (this.highestScore <= this._score) {
      this._isHighest = true;
      const scores = JSON.parse(
        localStorage.getItem(SCORE_STORAGE_PATH) || '{}'
      );
      scores[this.seed] = this._score;
      localStorage.setItem(SCORE_STORAGE_PATH, JSON.stringify(scores));
    }
  }

  public freeze(): void {
    this.frozen = true;
  }
}
