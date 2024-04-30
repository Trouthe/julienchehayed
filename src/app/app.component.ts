import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { CarouselComponent } from './carousel/carousel.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { PhotographyComponent } from './photography-c/photography/photography.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VJSPlayerComponent } from './vjsplayer/vjsplayer.component';
import { PhotographyMComponent } from './photography-c/photography-m/photography-m.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarouselComponent,
    TechSkillsComponent,
    PhotographyComponent,
    PhotographyMComponent,
    ExperienceComponent,
    ProfessionalSkillsComponent,
    PortfolioComponent,
    VJSPlayerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Julien CV';
  
  mobile: boolean = false;
  tablet: boolean = false;
  resolution: boolean = true;

  ngOnInit(): void {
    if (window.screen.width <= 500) {
      this.mobile = true;
      this.resolution = true;
      this.tablet = false;
    } else if (window.screen.width <= 768) {
      this.mobile = false;
      this.tablet = true;
    } else if (window.screen.width >= 1024) {
      this.mobile = false;
      this.resolution = false;
      this.tablet = false;
    }
  }
}
