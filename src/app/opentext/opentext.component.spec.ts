import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentextComponent } from './opentext.component';

describe('OpentextComponent', () => {
  let component: OpentextComponent;
  let fixture: ComponentFixture<OpentextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpentextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
