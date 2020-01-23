export class Tile {
  public number: number;
  public order: number;
  public empty: boolean;

  constructor(number: number, order: number, empty: boolean) {
    this.number = number;
    this.order = order;
    this.empty = empty;
  }

  // @todo constructor = update? Looks weird
  update(number: number, order: number, empty: boolean) {
    this.number = number;
    this.order = order;
    this.empty = empty;
  }
}
