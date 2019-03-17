import { Component, Input } from '@angular/core';

@Component({
  selector: 'learning-item',
  templateUrl: './learning-item.component.html',
  styleUrls: ['./learning-item.component.scss']
})
export class LearningItemComponent {
  @Input() name: string;
  @Input() imagePath: string;

  constructor() {}

  get derivedImagePath() {
    return `assets/logos/${this.imagePath}`;
  }
}
