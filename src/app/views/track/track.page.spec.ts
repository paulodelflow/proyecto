import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackPage } from './track.page';

describe('TrackPage', () => {
  let component: TrackPage;
  let fixture: ComponentFixture<TrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
