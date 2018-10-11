import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionCreateComponent } from './union-create.component';

describe('UnionCreateComponent', () => {
  let component: UnionCreateComponent;
  let fixture: ComponentFixture<UnionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
