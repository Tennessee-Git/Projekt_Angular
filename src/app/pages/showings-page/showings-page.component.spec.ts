import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingsPageComponent } from './showings-page.component';

describe('ShowingsPageComponent', () => {
  let component: ShowingsPageComponent;
  let fixture: ComponentFixture<ShowingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
