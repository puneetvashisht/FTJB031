import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'add-course',
    template: `
        <h2>Add Course</h2>

        <div *ngIf="message" class="alert alert-success" role="alert">
            {{message}}
        </div>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input #title (change)="0" type="text" class="form-control" placeholder="Course Title" aria-label="Username" aria-describedby="basic-addon1"> 
        </div>
        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Summary</span>
        </div>
        <input #summary (change)="0" type="text" class="form-control" placeholder="Course Summary" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-6">
            <button type="button" class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>
        </div>
    
    `
})
export class AddCourseComponent {

    message: string = ''

    constructor(private courseService: CourseService) { }

    addCourse(title: string, summary: string){
        console.log('Add Course', title, summary)

        // Http post request 
        let body = {caption:title, summary:summary}
        this.courseService.addCourse(body)
        .then( (res:any)=> {
            console.log(res);
            this.message = "Course Added successfully!!" + res.caption
          })

    }

    

}