import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StatsComponent } from "./components/stats/stats.component";
import { ToolsComponent } from "./components/tools/tools.component";
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/board/tile/tile.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [AppComponent, StatsComponent, ToolsComponent, BoardComponent, TileComponent, GameComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
