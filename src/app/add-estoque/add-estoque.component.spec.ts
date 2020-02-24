import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstoqueComponent } from './add-estoque.component';

describe('AddEstoqueComponent', () => {
  let component: AddEstoqueComponent;
  let fixture: ComponentFixture<AddEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
