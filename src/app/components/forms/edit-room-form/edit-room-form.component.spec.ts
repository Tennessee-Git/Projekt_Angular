import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomFormComponent } from './edit-room-form.component';

describe('EditRoomFormComponent', () => {
  let component: EditRoomFormComponent;
  let fixture: ComponentFixture<EditRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRoomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
