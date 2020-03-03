import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunComponent } from './add-fun.component';

describe('AddFunComponent', () => {
  let component: AddFunComponent;
  let fixture: ComponentFixture<AddFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
