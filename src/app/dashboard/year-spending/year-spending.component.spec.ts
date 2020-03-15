import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSpendingComponent } from './year-spending.component';

describe('YearSpendingComponent', () => {
  let component: YearSpendingComponent;
  let fixture: ComponentFixture<YearSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
