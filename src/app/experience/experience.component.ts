import { Component } from '@angular/core';

interface Exp {
  dateFrom: string;
  dateTo: string;
  title: string;
  company?: string | null;
  location?: string | null;
  description: string;

  // !! KEEP EMPTY !! //
  descriptionArray?: string[] | null;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience: Exp[] = [
    { 
      dateFrom: 'Oct 2024',
      dateTo: 'Present',
      title: 'Designer | Animator & Photographer',
      company: 'True Story Agency',
      location: 'Hazmieh | Lebanon',
      description: 'Designed visually appealing layouts for social media posts, ensuring a cohesive and attractive brand presence. Collaborated with a professional team to generate engaging content for comprehensive social media campaigns. Developed creative grids for new social media accounts, establishing a consistent and visually pleasing online identity. Orchestrated and conducted photoshoots to effectively convey targeted messages to the intended audience when posting on various platforms',
    },
    { 
      dateFrom: 'Apr 2023',
      dateTo: 'Present',
      title: 'Freelance Photographer & Editor | Animator',
      company: 'Think Online Agency',
      location: 'Kaslik | Lebanon',
      description: 'Adapted design concepts to different media formats, for websites and social media. Collaborated with a creative team to produce engaging graphics for digital marketing campaigns. Edit and enhance visual content to maintain brand consistency and quality'
    },
    { 
      dateFrom: 'Jan 2017',
      dateTo: 'Present',
      title: 'Freelance Editor',
      description: 'Edited video for social media platforms, optimizing content for each platform. Monitored industry trends to ensure content was up-to-date and relevant. Developed and implemented an editorial style guide to ensure consistency across all content'
    },
    { 
      dateFrom: 'Sep 2015',
      dateTo: 'Present',
      title: 'Freelance Photographer',
      description: 'Utilized a range of digital effects and post-production techniques to enhance the visuals of the film. Worked with the director to determine the best camera angles and movements for each scene. Operated a Steadicam to capture smooth and dynamic moving shots'
    },
  ];

  constructor() {
    this.experience.forEach(x => {
      x.descriptionArray = this.splitDescription(x.description);
    })
  }

  splitDescription(description: string): string[] {
    return description.split('.').map(sentence => sentence + '.');
  }
}