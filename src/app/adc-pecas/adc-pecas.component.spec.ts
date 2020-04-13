import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcPecasComponent } from './adc-pecas.component';

describe('AdcPecasComponent', () => {
  let component: AdcPecasComponent;
  let fixture: ComponentFixture<AdcPecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcPecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
