import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationInformationComponent } from './moderation-information.component';

describe('ModerationInformationComponent', () => {
  let component: ModerationInformationComponent;
  let fixture: ComponentFixture<ModerationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
