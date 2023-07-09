import { Component, EventEmitter, Output } from '@angular/core';
import { CreateGame } from 'src/app/interfaces/CreateGame';
import { NewGame } from 'src/app/interfaces/NewGame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent {
  @Output() onCreateGame: EventEmitter<CreateGame> = new EventEmitter();
  noOfSimulations!: number;
  switchDoor: boolean = false;

  constructor(private gameService: GameService) {}

  onSubmit() {
    if (!this.noOfSimulations) {
      alert('Please add number of simulations');
      return;
    }

    const createGame: CreateGame = {
      noOfSimulations: this.noOfSimulations,
      switchDoor: this.switchDoor,
    };

    this.onCreateGame.emit(createGame);

    console.log(createGame);

    (this.noOfSimulations = 0), (this.switchDoor = false);
  }
}
