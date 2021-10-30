import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAbTelInputComponent } from './ng-ab-tel-input.component';

describe('NgAbTelInputComponent', () => {
  let component: NgAbTelInputComponent;
  let fixture: ComponentFixture<NgAbTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAbTelInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAbTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
