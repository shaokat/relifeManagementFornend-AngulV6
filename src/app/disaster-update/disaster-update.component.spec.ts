import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterUpdateComponent } from './disaster-update.component';

describe('DisasterUpdateComponent', () => {
  let component: DisasterUpdateComponent;
  let fixture: ComponentFixture<DisasterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
