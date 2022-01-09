import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowingFormComponent } from './edit-showing-form.component';

describe('EditShowingFormComponent', () => {
  let component: EditShowingFormComponent;
  let fixture: ComponentFixture<EditShowingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShowingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShowingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
