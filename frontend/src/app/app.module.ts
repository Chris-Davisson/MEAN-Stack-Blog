import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResumeComponent } from './pages/resume/resume.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
