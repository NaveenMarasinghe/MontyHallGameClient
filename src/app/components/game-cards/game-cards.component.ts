import { Component, OnInit, Input } from '@angular/core';
import { CreateGame } from 'src/app/interfaces/CreateGame';
import { GameCard } from 'src/app/interfaces/GameCard';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css'],
})
export class GameCardsComponent {
  @Input() gameCard!: GameCard;
  gameCards: GameCard[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .getGameCards()
      .subscribe((gameCards) => (this.gameCards = gameCards));
  }

  createGame(createGame: CreateGame) {
    this.gameService
      .createGame(createGame)
      .subscribe((gameCard) => this.gameCards.push(gameCard));
  }
}
