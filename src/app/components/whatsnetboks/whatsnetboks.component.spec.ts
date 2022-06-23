import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsnetboksComponent } from './whatsnetboks.component';

describe('WhatsnetboksComponent', () => {
  let component: WhatsnetboksComponent;
  let fixture: ComponentFixture<WhatsnetboksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsnetboksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsnetboksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
