import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreateProfileComponent } from './update-create-profile.component';

describe('UpdateCreateProfileComponent', () => {
  let component: UpdateCreateProfileComponent;
  let fixture: ComponentFixture<UpdateCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCreateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
