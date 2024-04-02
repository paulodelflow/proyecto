import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TracksPage } from './tracks.page';

describe('TracksPage', () => {
  let component: TracksPage;
  let fixture: ComponentFixture<TracksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TracksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
