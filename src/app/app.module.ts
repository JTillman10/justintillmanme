import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HelloModule } from './hello/hello.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HelloModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
