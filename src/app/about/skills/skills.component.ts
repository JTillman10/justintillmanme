import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillAreas;

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillAreas = this.skillsService.getSkillAreas();
  }

  setVisibility(i) {
    this.skillAreas.forEach((skillArea, index) => {
      if (i === index) {
        skillArea.visible = !skillArea.visible;
      } else {
        skillArea.visible = false;
      }
    });
  }
}
