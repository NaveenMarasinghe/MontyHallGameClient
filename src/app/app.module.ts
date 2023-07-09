import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameCardsComponent } from './components/game-cards/game-cards.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameDoorsComponent } from './components/game-doors/game-doors.component';
import { GameDoorItemComponent } from './components/game-door-item/game-door-item.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GameCardsComponent,
  },
  {
    path: 'view/:id',
    component: GameViewComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewGameComponent,
    GameCardComponent,
    GameCardsComponent,
    GameViewComponent,
    GameDoorsComponent,
    GameDoorItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
