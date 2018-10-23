import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalpysoComponent } from './calpyso.component';

describe('CalpysoComponent', () => {
  let component: CalpysoComponent;
  let fixture: ComponentFixture<CalpysoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalpysoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalpysoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
