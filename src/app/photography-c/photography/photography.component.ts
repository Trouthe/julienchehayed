import { Component } from '@angular/core';
import photographyContent from '../photography-content.json'

interface content {
  title: string;
  img: string;
  description: string,
  truncatedDescription: string,
  showFullDescription: boolean
}

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})
export class PhotographyComponent {
  photography_content: content[] = photographyContent;

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
}
