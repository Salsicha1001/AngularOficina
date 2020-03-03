import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOsComponent } from './add-os.component';

describe('AddOsComponent', () => {
  let component: AddOsComponent;
  let fixture: ComponentFixture<AddOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
