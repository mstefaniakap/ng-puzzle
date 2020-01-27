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
  @Output() isSolved: boolean = false;

  constructor() {}

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.moves = 0;
    this.resetTiles(9);
  }

  onMove(tile: Tile) {
    this.move(tile);
  }

  move(tile: Tile) {
    const clickedTileIndex = this.tiles.indexOf(tile);
    const emptyTileIndex = this.tiles.map(item => item.empty).indexOf(true);

    if (
      emptyTileIndex >= 0 &&
      UtilsService.getTileNeighbours(clickedTileIndex).indexOf(
        emptyTileIndex
      ) >= 0
    ) {
      this.moves++;
      this.tiles[emptyTileIndex].update(
        this.tiles[clickedTileIndex].number,
        this.tiles[clickedTileIndex].order,
        false
      );
      this.tiles[clickedTileIndex].update(
        0,
        this.tiles[emptyTileIndex].order,
        true
      );

      if (this.isCorrectOrder()) {
        this.isSolved = true;
      }
    }
  }

  isCorrectOrder() {
    var correctItems = this.tiles.filter((item, index) => {
      return (
        item.number - 1 === index ||
        (index === this.tiles.length - 1 && item.number === 0)
      );
    });

    return correctItems.length > 1 && correctItems.length === this.tiles.length;
  }

  resetTiles(count: number = 9): void {
    this.tiles = [];
    this.isSolved = false;
    const range = Array.from(Array(count).keys());
    let shuffled = UtilsService.shuffle(range);

    while (!UtilsService.isSolvable(shuffled)) {
      shuffled = UtilsService.shuffle(range);
    }

    shuffled.map((number, order) => {
      this.tiles.push(new Tile(number, order, number === 0));
    });
  }
}
