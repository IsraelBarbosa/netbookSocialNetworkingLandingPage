import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtabuttonComponent } from './ctabutton.component';

describe('CtabuttonComponent', () => {
  let component: CtabuttonComponent;
  let fixture: ComponentFixture<CtabuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtabuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtabuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
