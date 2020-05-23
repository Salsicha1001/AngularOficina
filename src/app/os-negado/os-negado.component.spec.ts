import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsNegadoComponent } from './os-negado.component';

describe('OsNegadoComponent', () => {
  let component: OsNegadoComponent;
  let fixture: ComponentFixture<OsNegadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsNegadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsNegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
