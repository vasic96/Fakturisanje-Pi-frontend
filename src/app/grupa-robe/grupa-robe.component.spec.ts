import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaRobeComponent } from './grupa-robe.component';

describe('GrupaRobeComponent', () => {
  let component: GrupaRobeComponent;
  let fixture: ComponentFixture<GrupaRobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupaRobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupaRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
