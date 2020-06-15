import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaDonoComponent } from './rela-dono.component';

describe('RelaDonoComponent', () => {
  let component: RelaDonoComponent;
  let fixture: ComponentFixture<RelaDonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaDonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaDonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
