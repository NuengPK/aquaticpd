import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSinnerComponent } from './loading-sinner.component';

describe('LoadingSinnerComponent', () => {
  let component: LoadingSinnerComponent;
  let fixture: ComponentFixture<LoadingSinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
