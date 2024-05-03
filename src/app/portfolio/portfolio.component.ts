import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VJSPlayerComponent } from '../vjsplayer/vjsplayer.component';
import portfolioContent from '../portfolio/portfolio-content.json'

interface VideoShowcase {
  url: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [VJSPlayerComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  videos: VideoShowcase[] = portfolioContent;

  mobile: boolean = false;
  tablet: boolean = false;

  ngOnInit(): void {
    if (window.screen.width <= 500) {
      this.mobile = true;
      this.tablet = false;
    } else if (window.screen.width <= 768) {
      this.mobile = false;
      this.tablet = true;
    } else if (window.screen.width >= 1024) {
      this.mobile = false;
      this.tablet = false;
    }
  }
}
