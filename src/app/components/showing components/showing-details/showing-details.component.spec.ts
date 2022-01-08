import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingDetailsComponent } from './showing-details.component';

describe('ShowingDetailsComponent', () => {
  let component: ShowingDetailsComponent;
  let fixture: ComponentFixture<ShowingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
