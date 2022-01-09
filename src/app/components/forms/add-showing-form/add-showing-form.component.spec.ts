import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowingFormComponent } from './add-showing-form.component';

describe('AddShowingFormComponent', () => {
  let component: AddShowingFormComponent;
  let fixture: ComponentFixture<AddShowingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShowingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
