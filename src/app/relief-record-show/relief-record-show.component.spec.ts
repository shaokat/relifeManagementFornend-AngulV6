import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefRecordShowComponent } from './relief-record-show.component';

describe('ReliefRecordShowComponent', () => {
  let component: ReliefRecordShowComponent;
  let fixture: ComponentFixture<ReliefRecordShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliefRecordShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefRecordShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
