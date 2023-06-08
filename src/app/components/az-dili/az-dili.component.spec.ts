import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzDiliComponent } from './az-dili.component';

describe('AzDiliComponent', () => {
  let component: AzDiliComponent;
  let fixture: ComponentFixture<AzDiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzDiliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzDiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
