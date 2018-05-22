import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktureListComponent } from './fakture-list.component';

describe('FaktureListComponent', () => {
  let component: FaktureListComponent;
  let fixture: ComponentFixture<FaktureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaktureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaktureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
