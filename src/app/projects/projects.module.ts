import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarModule } from '../navbar/navbar.module';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, NavbarModule, FontAwesomeModule]
})
export class ProjectsModule {}
