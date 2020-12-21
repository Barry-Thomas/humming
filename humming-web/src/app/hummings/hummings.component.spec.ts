import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HummingsComponent } from './hummings.component';

describe('HummingsComponent', () => {
  let component: HummingsComponent;
  let fixture: ComponentFixture<HummingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HummingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HummingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
