import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPagComponent } from './hist-pag.component';

describe('HistPagComponent', () => {
  let component: HistPagComponent;
  let fixture: ComponentFixture<HistPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
