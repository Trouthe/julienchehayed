import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { CarouselComponent } from './carousel/carousel.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { PhotographyComponent } from './photography/photography.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VJSPlayerComponent } from './vjsplayer/vjsplayer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarouselComponent,
    TechSkillsComponent,
    PhotographyComponent,
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
}
