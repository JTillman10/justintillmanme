import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../navbar/navbar.module';

import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  exports: [HelloComponent],
  imports: [CommonModule, NavbarModule]
})
export class HelloModule {}
