import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFunComponent } from './list-fun.component';

describe('ListFunComponent', () => {
  let component: ListFunComponent;
  let fixture: ComponentFixture<ListFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
