import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-professional-skills',
  standalone: true,
  imports: [],
  templateUrl: './professional-skills.component.html',
  styleUrl: './professional-skills.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfessionalSkillsComponent {
  // @ViewChild('swiperRef', { static: true })
  //   private _swiperRef: ElementRef | undefined
  //   swiper?: Swiper
  
  //   options: SwiperOptions = {
  //     injectStyles: [`
  //       .swiper-pagination-bullet {
  //         text-align: center;
  //         line-height: 20px;
  //         font-size: 12px;
  //         color: #000;
  //         opacity: 1;
  //         background: rgba(0, 0, 0, 0.2);
  //       }
  
  //       .swiper-pagination-bullet-active {
  //         color: #fff;
  //         background: #fff;
  //       }
  //       `],
  //       pagination: {
  //         clickable: true,
  //       },
  //   }
  
  //   ngOnInit() {
  //     const swiperEl = this._swiperRef!.nativeElement
  
  //     Object.assign(swiperEl, this.options)
  //     swiperEl.initialize()
  //   }
}
