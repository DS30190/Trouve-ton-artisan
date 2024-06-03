import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodArtisansComponent } from './food-artisans.component';

describe('FoodArtisansComponent', () => {
  let component: FoodArtisansComponent;
  let fixture: ComponentFixture<FoodArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
