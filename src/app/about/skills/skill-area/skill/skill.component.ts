import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() names;
  @Input() level;
  @Input() imagePaths;

  imagePathIndex = 0;

  constructor() {}

  ngOnInit() {}

  get derivedImagePath() {
    return `assets/logos/${this.imagePaths[this.imagePathIndex]}`;
  }

  hoverSkill(index) {
    this.imagePathIndex = index;
  }
}
