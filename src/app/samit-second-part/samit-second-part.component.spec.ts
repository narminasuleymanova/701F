import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamitSecondPartComponent } from './samit-second-part.component';

describe('SamitSecondPartComponent', () => {
  let component: SamitSecondPartComponent;
  let fixture: ComponentFixture<SamitSecondPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamitSecondPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamitSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
