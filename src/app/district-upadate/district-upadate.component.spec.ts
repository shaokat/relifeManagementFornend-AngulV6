import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictUpadateComponent } from './district-upadate.component';

describe('DistrictUpadateComponent', () => {
  let component: DistrictUpadateComponent;
  let fixture: ComponentFixture<DistrictUpadateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictUpadateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictUpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
