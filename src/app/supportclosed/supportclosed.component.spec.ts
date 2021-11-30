import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportclosedComponent } from './supportclosed.component';

describe('SupportclosedComponent', () => {
  let component: SupportclosedComponent;
  let fixture: ComponentFixture<SupportclosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportclosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
