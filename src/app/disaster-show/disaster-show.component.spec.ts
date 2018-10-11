import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterShowComponent } from './disaster-show.component';

describe('DisasterShowComponent', () => {
  let component: DisasterShowComponent;
  let fixture: ComponentFixture<DisasterShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
