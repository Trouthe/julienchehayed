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
  selector: 'app-photography-m',
  standalone: true,
  imports: [],
  templateUrl: './photography-m.component.html',
  styleUrl: './photography-m.component.scss'
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
}
