import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/150" class="card-img-top" alt="No Image Present"/>
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{summary}}</p>
        <my-badge  caption="Votes" count={{count}}></my-badge>
    </div>
    </div>
    `
})
export class CardComponent implements OnInit {


    @Input('title') title: string
    @Input('summary') summary: string
    @Input('count') count: number


    constructor() { }

    ngOnInit() { 

    }

}