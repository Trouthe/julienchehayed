import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Introduction {
  name: string;
  profession: string;
  img: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CarouselComponent {
  headerCarousel: Introduction[] = [
    {
      name: 'JULIEN CHEHAYED', 
      profession: 'Designer & Animator', 
      img: '../assets/CarouselPictures/animator-hero.webp'
    },
    {
      name: 'JULIEN CHEHAYED', 
      profession: 'Photographer', 
      img: '../assets/CarouselPictures/photographer-hero.webp' 
    }
  ];
}
