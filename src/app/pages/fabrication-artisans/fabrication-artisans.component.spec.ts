import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationArtisansComponent } from './fabrication-artisans.component';

describe('FabricationArtisansComponent', () => {
  let component: FabricationArtisansComponent;
  let fixture: ComponentFixture<FabricationArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabricationArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricationArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
