import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPConcurComponent } from './sapconcur.component';

describe('SAPConcurComponent', () => {
  let component: SAPConcurComponent;
  let fixture: ComponentFixture<SAPConcurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAPConcurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPConcurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
