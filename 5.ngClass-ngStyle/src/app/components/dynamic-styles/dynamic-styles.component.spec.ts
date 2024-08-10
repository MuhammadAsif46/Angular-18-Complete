import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStylesComponent } from './dynamic-styles.component';

describe('DynamicStylesComponent', () => {
  let component: DynamicStylesComponent;
  let fixture: ComponentFixture<DynamicStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
