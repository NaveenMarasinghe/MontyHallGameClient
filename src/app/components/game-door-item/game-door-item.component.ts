import { Component, Input } from '@angular/core';
import { GameData } from 'src/app/interfaces/GameData';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-door-item',
  templateUrl: './game-door-item.component.html',
  styleUrls: ['./game-door-item.component.css'],
})
export class GameDoorItemComponent {
  @Input() game!: GameData;
  imagesObject = {
    image1: 'assets/1.png',
    image2: 'assets/1.png',
    image3: 'assets/1.png',
  };
  selectedObject = {
    door1: false,
    door2: false,
    door3: false,
  };

  ngOnInit(): void {
    this.getImagePath(this.game);
    this.getSelected(this.game);
  }

  getImagePath(game: GameData) {
    switch (game.winDoorNumber) {
      case 1:
        this.imagesObject.image1 = 'assets/2.png';
        break;
      case 2:
        this.imagesObject.image2 = 'assets/2.png';
        break;
      case 3:
        this.imagesObject.image3 = 'assets/2.png';
        break;
      default:
        break;
    }
  }

  getSelected(game: GameData) {
    switch (game.selectedDoorNumber) {
      case 1:
        this.selectedObject.door1 = true;
        break;
      case 2:
        this.selectedObject.door2 = true;
        break;
      case 3:
        this.selectedObject.door3 = true;
        break;
      default:
        break;
    }
  }
}
