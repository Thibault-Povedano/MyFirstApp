import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnomatopoeiasComponent } from './app-onomatopoeias.component';

describe('AppOnomatopoeiasComponent', () => {
  let component: AppOnomatopoeiasComponent;
  let fixture: ComponentFixture<AppOnomatopoeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOnomatopoeiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOnomatopoeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
