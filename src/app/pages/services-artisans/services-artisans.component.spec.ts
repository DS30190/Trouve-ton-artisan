import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesArtisansComponent } from './services-artisans.component';

describe('ServicesArtisansComponent', () => {
  let component: ServicesArtisansComponent;
  let fixture: ComponentFixture<ServicesArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
