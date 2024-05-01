import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import photographyContent from '../photography-content.json'
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

interface content {
  title: string;
  img: string;
  description: string,
  truncatedDescription: string,
  showFullDescription: boolean
}

@Component({
  selector: 'app-photography-m',
  standalone: true,
  imports: [],
  templateUrl: './photography-m.component.html',
  styleUrl: './photography-m.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotographyMComponent {
  photography_content: content[] = photographyContent

  constructor() {this.truncateDescriptions()}

  truncateDescriptions() {
    this.photography_content.forEach(item => {
      if (item.description.length > 200)
        item.truncatedDescription = item.description.substring(0, 200) + '...';
      else item.description
    });
  }

  toggleDescription(index: number) {
    this.photography_content[index].showFullDescription = !this.photography_content[index].showFullDescription;
  }

  @ViewChild('swiperRef', { static: true })
  private _swiperRef: ElementRef | undefined
  swiper?: Swiper

  options: SwiperOptions = {
    injectStyles: [`
      .swiper-pagination-bullet {
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #fff;
      }
      `],
      pagination: {
        clickable: true,
      },
  }

  ngOnInit() {
    const swiperEl = this._swiperRef!.nativeElement

    Object.assign(swiperEl, this.options)
    swiperEl.initialize()
  }
}
