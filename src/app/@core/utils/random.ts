export class Random {
  private _seed: number;

  constructor(public readonly seed: number) {
    this._seed = seed % 2147483647;
    if (this._seed) this._seed += 2147483646;
  }

  public nextInt() {
    return (this._seed = (this._seed * 16807) % 2147483647);
  }

  public next(): number {
    return (this.nextInt() - 1) / 2147483646;
  }
}
