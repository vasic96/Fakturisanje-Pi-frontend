import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovnaGodinaComponent } from './poslovna-godina.component';

describe('PoslovnaGodinaComponent', () => {
  let component: PoslovnaGodinaComponent;
  let fixture: ComponentFixture<PoslovnaGodinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoslovnaGodinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslovnaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
