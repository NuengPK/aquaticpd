import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFontComponent } from './page-not-font.component';

describe('PageNotFontComponent', () => {
  let component: PageNotFontComponent;
  let fixture: ComponentFixture<PageNotFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
