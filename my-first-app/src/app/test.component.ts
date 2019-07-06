import { Component } from "@angular/core";

@Component({
    selector: 'my-test',
    template: `
        <h2>Wonderful innings: {{name}}</h2>
        <button (click)="reverse()">Reverse Name</button>
    `
})
export class TestComponent{
    name: string = 'Rohit'

    reverse(){
        console.log(this.name)
        this.name = this.name.split('').reverse().join('')
    }

}