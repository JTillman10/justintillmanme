import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../navbar/navbar.module';
// import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
// library.add(faCode);
// library.add(faEye);

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, NavbarModule, FontAwesomeModule]
})
export class ProjectsModule {}
