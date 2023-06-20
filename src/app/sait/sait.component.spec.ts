import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaitComponent } from './sait.component';

describe('SaitComponent', () => {
  let component: SaitComponent;
  let fixture: ComponentFixture<SaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
