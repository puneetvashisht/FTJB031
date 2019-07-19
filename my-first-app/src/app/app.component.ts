import { Component, OnInit } from '@angular/core';
import { Badge } from './badge';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
 
  constructor(private http: HttpClient){

  }

  ngOnInit() { 
    console.log('Do some initialization')
    this.http.get('http://localhost:3000/courses').toPromise()
    .then( (res:Array<Badge>)=> {
      console.log(res)
      this.badges = res
    })
  }

  badges: Array<Badge> = []

 

}
