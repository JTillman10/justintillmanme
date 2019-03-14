import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HelloModule } from './hello/hello.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ScrollTopModule } from './scroll-top/scroll-top.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HelloModule,
    ProjectsModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
