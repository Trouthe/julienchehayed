import { stagger } from '@angular/animations';
import { Component } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface TechSkills {
  name: string;
  value: number;
  img: string;
  color: string;
}

@Component({
  selector: 'app-tech-skills',
  standalone: true,
  imports: [RoundProgressComponent],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.scss'
})
export class TechSkillsComponent {
  technicalSkillsValues: TechSkills[] = [
    {
      name: "Adobe After Effect",
      value: 0, 
      img: '../assets/Icons/AdobeSuite/after-effect.webp',
      color: '#D392FF'
    },
    {
      name: "Adobe Premiere Pro",
      value: 0, 
      img: '../assets/Icons/AdobeSuite/premiere-pro.webp',
      color: '#DF76FF'
    },
    {
      name: "Adobe Photoshop",
      value: 0, 
      img: '../assets/Icons/AdobeSuite/photoshop.webp',
      color: '#37C5FF'
    },
    
    {
      name: "Adobe Illustrator",
      value: 0, 
      img: '../assets/Icons/AdobeSuite/illustrator.webp',
      color: '#FF7E1B'
    },
  ];
  
  ngOnInit():void {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#techincal-skills',
        start: '16.5% 45%',

        //---- DEBUGGING
        markers: false,

        onEnter: () => {
          this.technicalSkillsValues[0].value = 85;
          this.technicalSkillsValues[1].value = 80;
          this.technicalSkillsValues[2].value = 70;
          this.technicalSkillsValues[3].value = 65;
        }
      }
    });
  }

  logg():void {

    // for (let i=0; i<this.technicalSkillsValues.length; i++) {
      console.log(this.technicalSkillsValues)
    // }
  }
}
