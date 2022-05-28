import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityTableComponent } from './popularity-table.component';

describe('PopularityTableComponent', () => {
  let component: PopularityTableComponent;
  let fixture: ComponentFixture<PopularityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
