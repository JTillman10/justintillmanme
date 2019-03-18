import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloModule } from './hello/hello.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { FooterModule } from './footer/footer.module';
import { ScrollTopModule } from './scroll-top/scroll-top.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AboutModule,
    HelloModule,
    ContactModule,
    FooterModule,
    ProjectsModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
