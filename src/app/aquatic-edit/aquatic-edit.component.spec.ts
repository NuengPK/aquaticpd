import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticEditComponent } from './aquatic-edit.component';

describe('AquaticEditComponent', () => {
  let component: AquaticEditComponent;
  let fixture: ComponentFixture<AquaticEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
