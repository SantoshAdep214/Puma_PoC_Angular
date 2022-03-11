import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeSignComponent } from './adobe-sign.component';

describe('AdobeSignComponent', () => {
  let component: AdobeSignComponent;
  let fixture: ComponentFixture<AdobeSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobeSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobeSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
