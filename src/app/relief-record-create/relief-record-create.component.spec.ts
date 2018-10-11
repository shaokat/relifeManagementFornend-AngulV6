import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefRecordCreateComponent } from './relief-record-create.component';

describe('ReliefRecordCreateComponent', () => {
  let component: ReliefRecordCreateComponent;
  let fixture: ComponentFixture<ReliefRecordCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliefRecordCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefRecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
