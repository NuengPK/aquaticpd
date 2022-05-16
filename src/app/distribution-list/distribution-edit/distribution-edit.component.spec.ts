import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionEditComponent } from './distribution-edit.component';

describe('DistributionEditComponent', () => {
  let component: DistributionEditComponent;
  let fixture: ComponentFixture<DistributionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
