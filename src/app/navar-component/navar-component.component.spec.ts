import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarComponentComponent } from './navar-component.component';

describe('NavarComponentComponent', () => {
  let component: NavarComponentComponent;
  let fixture: ComponentFixture<NavarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
