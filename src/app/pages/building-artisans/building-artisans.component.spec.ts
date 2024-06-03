import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingArtisansComponent } from './building-artisans.component';

describe('BuildingArtisansComponent', () => {
  let component: BuildingArtisansComponent;
  let fixture: ComponentFixture<BuildingArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
