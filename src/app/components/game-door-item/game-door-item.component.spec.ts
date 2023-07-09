import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDoorItemComponent } from './game-door-item.component';

describe('GameDoorItemComponent', () => {
  let component: GameDoorItemComponent;
  let fixture: ComponentFixture<GameDoorItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDoorItemComponent]
    });
    fixture = TestBed.createComponent(GameDoorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
