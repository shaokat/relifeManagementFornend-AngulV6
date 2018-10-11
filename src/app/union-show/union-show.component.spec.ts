import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionShowComponent } from './union-show.component';

describe('UnionShowComponent', () => {
  let component: UnionShowComponent;
  let fixture: ComponentFixture<UnionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
