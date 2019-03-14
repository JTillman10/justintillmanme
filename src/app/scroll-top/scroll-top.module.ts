import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ScrollTopComponent } from './scroll-top.component';

@NgModule({
  declarations: [ScrollTopComponent],
  exports: [ScrollTopComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class ScrollTopModule {}
