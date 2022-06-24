import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcommunityComponent } from './ourcommunity.component';

describe('OurcommunityComponent', () => {
  let component: OurcommunityComponent;
  let fixture: ComponentFixture<OurcommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
