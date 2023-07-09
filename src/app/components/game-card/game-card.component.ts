import { Component, Input } from '@angular/core';
import { GameCard } from 'src/app/interfaces/GameCard';

const GameCardData: GameCard = {
  gameId: 1,
  noOfSimulations: 10,
  switchDoor: false,
  status: 1,
};

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() gameCard!: GameCard;
}
