import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpazillaCreateComponent } from './upazilla-create.component';

describe('UpazillaCreateComponent', () => {
  let component: UpazillaCreateComponent;
  let fixture: ComponentFixture<UpazillaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpazillaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpazillaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
