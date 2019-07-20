import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl: string = 'http://localhost:3000/courses/'


@Injectable()
export class CourseService {
    
    constructor(private http: HttpClient) { }


    addCourse(course: any){
        return this.http.post(baseUrl, course).toPromise()
    }

    deleteCourse(id: number){
        return this.http.delete(baseUrl + id).toPromise()
    }

    findAllCourses(){
        return this.http.get(baseUrl).toPromise()
    }

}