import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
}
