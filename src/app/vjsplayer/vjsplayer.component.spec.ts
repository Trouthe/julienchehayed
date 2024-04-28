import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VJSPlayerComponent } from './vjsplayer.component';

describe('VJSPlayerComponent', () => {
  let component: VJSPlayerComponent;
  let fixture: ComponentFixture<VJSPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VJSPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VJSPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
