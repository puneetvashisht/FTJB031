import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/150" class="card-img-top" alt="No Image Present"/>
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{summary}}</p>
        <my-badge  caption="Votes" count={{count}}></my-badge>
        <button type="button" class="btn btn-danger" (click)="deleteCourse()">Delete</button>
    </div>
    </div>
    `
})
export class CardComponent implements OnInit {


    @Input('title') title: string
    @Input('summary') summary: string
    @Input('count') count: number
    @Input('id') id: number


    constructor(private courseService: CourseService) { }

    ngOnInit() { 

    }

    deleteCourse(){
        this.courseService.deleteCourse(this.id)
        .then(res=>console.log(res))

    }

}