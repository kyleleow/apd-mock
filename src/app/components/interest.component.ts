import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent {  
    name: string;
    occupation: string = '';
    email: string;
    contact: string;
    message: string;

    onSubmit(){
        alert(`Name: ${this.name}\nOccupation: ${this.occupation}\nEmail: ${this.email}\nContact No: ${this.contact}\nMessage: ${this.message}`);
    }
}
