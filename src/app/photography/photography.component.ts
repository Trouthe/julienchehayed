import { Component } from '@angular/core';

interface content {
  title: string;
  img: string;
  description: string,
}

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})
export class PhotographyComponent {
  photography_content: content[] = [
    { 
      title: 'WEDDINGS PHOTOGRAPHY & VIDEOGRAPHY', 
      img: '../assets/PhotographyPictures/wedding (Small).webp', 
      description: 'I embarked on my journey in photography at a young age,where a mere hobby blossomed into a profession as I delved into capturing timeless moments for brides and' 
    },
    { 
      title: 'COMMERCIAL PHOTOGRAPHY & VIDEOGRAPHY', 
      img: '../assets/PhotographyPictures/commercial (Small).webp', 
      description: 'Driven by an insatiable passion for creativity, I ventured further into the realms of technical mastery as an animator and editor. However, my ardor for visual storytelling led me inexorably to' 
    },
    { 
      title: 'PROFESSIONAL EQUIPMENT', 
      img: '../assets/PhotographyPictures/professional (Small).webp', 
      description: 'Over the years, I have cultivated a comprehensive understanding of various camera systems, honing my proficiency with each shutter click. My primary tool,' 
    },
  ]
}
