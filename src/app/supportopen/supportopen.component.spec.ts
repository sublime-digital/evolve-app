import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportopenComponent } from './supportopen.component';

describe('SupportopenComponent', () => {
  let component: SupportopenComponent;
  let fixture: ComponentFixture<SupportopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportopenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
