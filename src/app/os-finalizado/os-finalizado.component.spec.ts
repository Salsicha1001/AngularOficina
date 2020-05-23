import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsFinalizadoComponent } from './os-finalizado.component';

describe('OsFinalizadoComponent', () => {
  let component: OsFinalizadoComponent;
  let fixture: ComponentFixture<OsFinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsFinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
