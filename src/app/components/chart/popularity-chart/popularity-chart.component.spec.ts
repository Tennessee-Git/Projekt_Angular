import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityChartComponent } from './popularity-chart.component';

describe('PopularityChartComponent', () => {
  let component: PopularityChartComponent;
  let fixture: ComponentFixture<PopularityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
