import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  @Input() moves: number = 0;
  @Input() isSolved: boolean;
  color: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.color =
      this.moves < 20 ? "#1aa213" : this.moves < 40 ? "#d8880a" : "#c12f2f";
  }
}
