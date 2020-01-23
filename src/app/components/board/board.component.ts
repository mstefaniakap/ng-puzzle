import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

import { Tile } from "./../../model/Tile";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  @Input() tiles: Tile[];

  constructor() {}

  ngOnInit() {}
}
