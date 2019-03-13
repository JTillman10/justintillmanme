import { Component, OnInit, Input } from '@angular/core';

import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() repository: string;
  @Input() url: string;
  @Input() summary: string;
  @Input() tags: string[];

  faCode = faCode;
  faEye = faEye;

  constructor() {}

  ngOnInit() {}
}
