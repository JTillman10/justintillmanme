import { Component, OnInit, Input } from '@angular/core';

import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() name;
  @Input() image;
  @Input() repository;
  @Input() url;

  faCode = faCode;
  faEye = faEye;

  constructor() {}

  ngOnInit() {}
}
