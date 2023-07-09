import { Component, Input } from '@angular/core';
import { GameData } from 'src/app/interfaces/GameData';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-doors',
  templateUrl: './game-doors.component.html',
  styleUrls: ['./game-doors.component.css'],
})
export class GameDoorsComponent {
  @Input() gameData: GameData[] = [];

  ngOnInit(): void {}
}
