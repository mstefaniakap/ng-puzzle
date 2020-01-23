import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tile } from "./../../../model/Tile";

@Component({
  selector: "[app-tile]",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.scss"]
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;
  @Output() move = new EventEmitter<Tile>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.move.emit(this.tile);
  }
}
