import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameCard } from 'src/app/interfaces/GameCard';
import { GameData } from 'src/app/interfaces/GameData';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  gameId: number = 0;
  gameCard: GameCard = {
    gameId: 0,
    switchDoor: false,
    noOfSimulations: 0,
    status: 0,
  };
  gameData: GameData[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.gameId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.gameService
      .getGameCard(this.gameId)
      .subscribe((gameCard) => (this.gameCard = gameCard));
    this.gameService
      .getGameData(this.gameId)
      .subscribe((gameData) => (this.gameData = gameData));
  }

  onClick(gameId: number) {
    this.gameService
      .runGame(gameId)
      .subscribe((gameData) => (this.gameData = gameData));
  }
}
