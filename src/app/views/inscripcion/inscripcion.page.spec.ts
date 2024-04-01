import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscripcionPage } from './inscripcion.page';

describe('InscripcionPage', () => {
  let component: InscripcionPage;
  let fixture: ComponentFixture<InscripcionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
