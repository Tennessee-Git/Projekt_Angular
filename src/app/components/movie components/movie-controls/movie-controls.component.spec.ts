import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieControlsComponent } from './movie-controls.component';

describe('MovieControlsComponent', () => {
  let component: MovieControlsComponent;
  let fixture: ComponentFixture<MovieControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
