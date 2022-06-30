import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetouraplicationComponent } from './getouraplication.component';

describe('GetouraplicationComponent', () => {
  let component: GetouraplicationComponent;
  let fixture: ComponentFixture<GetouraplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetouraplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetouraplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
