import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";

import { Tile } from "./../../model/Tile";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  @Input() tiles: Tile[];
  @Output() move = new EventEmitter<Tile>();

  constructor() {}

  ngOnInit() {}

  // 'onMove' comes from Tile's 'move' event - could simply come from 'click'
  // Unnecessary event added for practise purpose :)
  onMove(tile) {
    this.move.emit(tile);
  }
}
