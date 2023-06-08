import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimyaComponent } from './kimya.component';

describe('KimyaComponent', () => {
  let component: KimyaComponent;
  let fixture: ComponentFixture<KimyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
