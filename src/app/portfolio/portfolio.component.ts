import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VJSPlayerComponent } from '../vjsplayer/vjsplayer.component';
import Swiper from 'swiper';

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
  videos: VideoShowcase[] = [
    {
      url: 'https://www.dropbox.com/scl/fi/2h19nyw17vewctsju1i3t/Ayadina_1.mp4?rlkey=prd3kx9meffecgfc46mk438ry&raw=1',
      image: '../assets/PortfolioPreviews/ayadina-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/30w7mrw0unjros7ms8q5v/Bizarre_1.mp4?rlkey=7mwsuek2hhdbhp1x8cmzpz1j3&raw=1',
      image: '../assets/PortfolioPreviews/bizzare-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/no8tlnchm3j788sithobh/Bizarre_2.mp4?rlkey=hmipivr6opm2jglqd98qcoii4&raw=1',
      image: '../assets/PortfolioPreviews/bizzare-2.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/n7hjyvrzwhycw0wkue4q3/H_Hookah_1.mp4?rlkey=yy0tg49sfgh5dl6y4v57ebz9b&raw=1',
      image: '../assets/PortfolioPreviews/hookah-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/6qq1pbhug4otf585wqhn3/H_Hookah_2.mp4?rlkey=luj4tt4lchpekxxepmmtamnh1&raw=1',
      image: '../assets/PortfolioPreviews/hookah-2.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/climzo0yjyxcyftftltny/H_Hookah_3.mp4?rlkey=3a87uylp178uo5425sj8t7x53&raw=1',
      image: '../assets/PortfolioPreviews/hookah-3.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/fv494urvo30xdccgprrwb/H_Hookah_4.mp4?rlkey=0w3w7r81n6aj2zwhwpbuudt8f&raw=1',
      image: '../assets/PortfolioPreviews/hookah-4.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/bv5nflkkwfimk7fymzb0k/H_Hookah_5.mp4?rlkey=bct07cqw8v0hc4yisvrtn9j7n&raw=1',
      image: '../assets/PortfolioPreviews/hookah-5.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/weme8hlro7tdn31puegh5/H_Hookah_6.mp4?rlkey=85sb1twlq30zabyct0rctpgjo&raw=1',
      image: '../assets/PortfolioPreviews/hookah-6.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/mr1bxq60fwe5ysonjc1wq/H_Hookah_7.mp4?rlkey=gfpk2gu8kxqphbfirz8yi7zev&raw=1',
      image: '../assets/PortfolioPreviews/hookah-7.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/dki8mu5o1rjemsmgppxcb/Halyoun_1.mp4?rlkey=enyyjf82ik7q9b000duwne499&raw=1',
      image: '../assets/PortfolioPreviews/halyoun-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/wz8vghvy4qt26zh0lxhz8/Halyoun_2.mp4?rlkey=sk0tx8j5sw0p1sz9rqrc10fx5&raw=1',
      image: '../assets/PortfolioPreviews/halyoun-2.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/qn8wi1ntx5awc7332fj0v/Halyoun_3.mp4?rlkey=hljmoyd2b9wx559upiiq9i914&raw=1',
      image: '../assets/PortfolioPreviews/halyoun-3.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/g6tagy5veutbv8yq92kwd/Halyoun_4.mp4?rlkey=aapqq2xqzweqeyosrj7if3hjl&raw=1',
      image: '../assets/PortfolioPreviews/halyoun-4.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/1pu6zv5fnylglleqpxnzh/Halyoun_5.mp4?rlkey=nhd9al36jxkbsxicxear0v5yp&raw=1',
      image: '../assets/PortfolioPreviews/halyoun-5.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/ml5h6aoytm9bs607n84ov/RedBull_1.mp4?rlkey=z975only0hoe53m4k2qbwvcc2&raw=1',
      image: '../assets/PortfolioPreviews/redbull-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/iwqcwb9t0soxt9i1jb1jv/SSK.mp4?rlkey=qcf60wupmzttdxo8i61q284wg&raw=1',
      image: '../assets/PortfolioPreviews/ssk-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/2otd22xjw900t7ilhj5oj/Sushi-Star_1.mp4?rlkey=muthb0gpt33gej48u2nd68ah3&raw=1',
      image: '../assets/PortfolioPreviews/sushi-star-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/miadubuwqjys2m526yovk/TCT_Taxi_1.mp4?rlkey=ap862xpjjbujjizgbxi5ww2xd&raw=1',
      image: '../assets/PortfolioPreviews/tct-taxi-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/ccv8a2cefwrhjcruhhqhf/TCT_Taxi_2.mp4?rlkey=adwcgy9wjhrpmqpehn1qk14p9&raw=1',
      image: '../assets/PortfolioPreviews/tct-taxi-2.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/n1p00mvsr9m1pscpb23fz/TCT_Taxi_3.mp4?rlkey=h6ql8wvnpts7gvja3w340zybc&raw=1',
      image: '../assets/PortfolioPreviews/tct-taxi-3.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/b9absg0in2pz6p9qfyp50/TSP_1.mp4?rlkey=mc5p0zb4tj99c7jijqvy62kkc&raw=1',
      image: '../assets/PortfolioPreviews/tsp-1.webp'
    },
    {
      url: 'https://www.dropbox.com/scl/fi/13nv8qtopn8akao3zrzog/Ziebart_1.mp4?rlkey=dppbriurs14opxgq89nrfksy1&raw=1',
      image: '../assets/PortfolioPreviews/ziebart-1.webp'
    },
  ];

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
