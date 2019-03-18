import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class ProjectsModule {}
