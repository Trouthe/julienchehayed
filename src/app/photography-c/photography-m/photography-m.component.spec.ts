import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyMComponent } from './photography-m.component';

describe('PhotographyMComponent', () => {
  let component: PhotographyMComponent;
  let fixture: ComponentFixture<PhotographyMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographyMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotographyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
