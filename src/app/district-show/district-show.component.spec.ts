import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictShowComponent } from './district-show.component';

describe('DistrictShowComponent', () => {
  let component: DistrictShowComponent;
  let fixture: ComponentFixture<DistrictShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
