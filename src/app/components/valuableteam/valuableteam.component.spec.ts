import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableteamComponent } from './valuableteam.component';

describe('ValuableteamComponent', () => {
  let component: ValuableteamComponent;
  let fixture: ComponentFixture<ValuableteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuableteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
