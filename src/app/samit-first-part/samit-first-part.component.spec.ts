import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamitFirstPartComponent } from './samit-first-part.component';

describe('SamitFirstPartComponent', () => {
  let component: SamitFirstPartComponent;
  let fixture: ComponentFixture<SamitFirstPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamitFirstPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamitFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
