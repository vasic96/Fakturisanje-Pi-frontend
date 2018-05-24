import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JedinicaMereComponent } from './jedinica-mere.component';

describe('JedinicaMereComponent', () => {
  let component: JedinicaMereComponent;
  let fixture: ComponentFixture<JedinicaMereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JedinicaMereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JedinicaMereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
