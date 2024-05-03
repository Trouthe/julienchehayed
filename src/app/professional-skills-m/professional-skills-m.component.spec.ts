import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsMComponent } from './professional-skills-m.component';

describe('ProfessionalSkillsMComponent', () => {
  let component: ProfessionalSkillsMComponent;
  let fixture: ComponentFixture<ProfessionalSkillsMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalSkillsMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalSkillsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
