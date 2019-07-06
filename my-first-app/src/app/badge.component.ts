import { Component } from '@angular/core';


@Component({
    selector: 'my-badge',
    template: `
    <button type="button" class="btn btn-primary" (click)="handleClick()">
        Notifications <span class="badge badge-light">4</span>
    </button>
    `
})
export class BadgeComponent{
    title: string;
    handleClick(){
        console.log('button clicked... can attach some functionality')
    }
}