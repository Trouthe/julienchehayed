import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-professional-skills-m',
  standalone: true,
  imports: [],
  templateUrl: './professional-skills-m.component.html',
  styleUrl: './professional-skills-m.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfessionalSkillsMComponent {
  @ViewChild('swiperRef', { static: true })
  private _swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  profskills: any = [
    { 
      image: '../assets/Icons/communication.webp', 
      title: 'communication' 
    },
    { 
      image: '../assets/Icons/creativity.webp', 
      title: 'creativity' 
    },
    { 
      image: '../assets/Icons/adaptation.webp', 
      title: 'adaptability' 
    },
    { 
      image: '../assets/Icons/organization.webp', 
      title: 'organization' 
    },
    {
      image: '../assets/Icons/learning.webp',
      title: 'learning \n development',
    },
  ];

  options: SwiperOptions = {
    injectStyles: [
      `
      .swiper-pagination-bullet {
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.75);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #fff;
      }
      `,
    ],
    pagination: {
      clickable: true,
    },
  };

  ngOnInit() {
    const swiperEl = this._swiperRef!.nativeElement;

    Object.assign(swiperEl, this.options);
    swiperEl.initialize();
  }

  c_log(anything: any) {
    console.log(anything);
  }
}
