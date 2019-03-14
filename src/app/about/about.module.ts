import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../navbar/navbar.module';

import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillAreaComponent } from './skills/skill-area/skill-area.component';
import { SkillComponent } from './skills/skill-area/skill/skill.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillPipe } from './skills/skill-area/skill/skill.pipe';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    SkillAreaComponent,
    SkillComponent,
    ProfileComponent,
    SkillPipe
  ],
  exports: [AboutComponent],
  imports: [CommonModule, NavbarModule]
})
export class AboutModule {}
