import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertaficatComponent } from './certaficat.component';

describe('CertaficatComponent', () => {
  let component: CertaficatComponent;
  let fixture: ComponentFixture<CertaficatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertaficatComponent]
    });
    fixture = TestBed.createComponent(CertaficatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
