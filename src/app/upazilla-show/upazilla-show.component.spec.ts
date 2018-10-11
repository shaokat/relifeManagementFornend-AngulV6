import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpazillaShowComponent } from './upazilla-show.component';

describe('UpazillaShowComponent', () => {
  let component: UpazillaShowComponent;
  let fixture: ComponentFixture<UpazillaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpazillaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpazillaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
