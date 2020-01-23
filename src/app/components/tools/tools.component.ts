import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.scss"]
})
export class ToolsComponent implements OnInit {
  @Output() resetGame = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onReset() {
    this.resetGame.emit();
  }
}
