import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionUpdateComponent } from './union-update.component';

describe('UnionUpdateComponent', () => {
  let component: UnionUpdateComponent;
  let fixture: ComponentFixture<UnionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
