import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './components/card.component';
import { AddCourseComponent } from './components/add-course.component';
import { CourseService } from './services/course.service';



@NgModule({
  declarations: [
    AppComponent, TestComponent, BadgeComponent, CardComponent,AddCourseComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
