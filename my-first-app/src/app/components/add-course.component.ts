import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'add-course',
    template: `
        <h2>Add Course</h2>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input #title (change)="0" type="text" class="form-control" placeholder="Course Title" aria-label="Username" aria-describedby="basic-addon1"> {{title.value}}
        </div>
        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Summary</span>
        </div>
        <input #summary (change)="0" type="text" class="form-control" placeholder="Course Summary" aria-label="Username" aria-describedby="basic-addon1">{{summary.value}}
        </div>
        <div class="input-group mb-6">
            <button type="button" class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>
        </div>
    
    `
})
export class AddCourseComponent implements OnInit {

    constructor(private http: HttpClient) { }

    addCourse(title: string, summary: string){
        console.log('Add Course', title, summary)

        // Http post request 
        let body = {caption:title, summary:summary}
        this.http.post('http://localhost:3000/courses', body).toPromise()
        .then( (res)=> {
            console.log(res);
          })

    }

    ngOnInit() { 

    }

}