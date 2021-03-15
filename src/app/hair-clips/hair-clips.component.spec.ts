import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairClipsComponent } from './hair-clips.component';

describe('HairClipsComponent', () => {
  let component: HairClipsComponent;
  let fixture: ComponentFixture<HairClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairClipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
