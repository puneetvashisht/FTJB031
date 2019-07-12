import { Component } from '@angular/core';
import { Badge } from './badge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';

  badges: Array<Badge> = [
    {caption: "Angular", count: 2},
    {caption: "React", count: 5},
    {caption: "Ember", count: 3}
  ]

 

}
