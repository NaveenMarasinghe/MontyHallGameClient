import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDoorsComponent } from './game-doors.component';

describe('GameDoorsComponent', () => {
  let component: GameDoorsComponent;
  let fixture: ComponentFixture<GameDoorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDoorsComponent]
    });
    fixture = TestBed.createComponent(GameDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
