import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEdiarPersonaComponent } from './agregar-ediar-persona.component';

describe('AgregarEdiarPersonaComponent', () => {
  let component: AgregarEdiarPersonaComponent;
  let fixture: ComponentFixture<AgregarEdiarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEdiarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEdiarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
