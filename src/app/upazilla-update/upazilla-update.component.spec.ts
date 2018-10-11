import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpazillaUpdateComponent } from './upazilla-update.component';

describe('UpazillaUpdateComponent', () => {
  let component: UpazillaUpdateComponent;
  let fixture: ComponentFixture<UpazillaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpazillaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpazillaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
