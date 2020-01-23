import { Component, OnInit, Output } from "@angular/core";

import { Tile } from "./../../model/Tile";
import { UtilsService } from "./../../services/utils.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  @Output() moves: number;
  @Output() tiles: Tile[];

  constructor() {}

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.moves = 0;
    this._resetTiles(9);
  }

  private _resetTiles(count: number = 9): void {
    this.tiles = [];
    const range = Array.from(Array(count).keys());
    let shuffled = this._shuffle(range);

    while (!UtilsService.isSolvable(shuffled)) {
      shuffled = this._shuffle(range);
    }

    shuffled.map((number, order) => {
      this.tiles.push(new Tile(number, order, number === 0));
    });
  }

  private _shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
