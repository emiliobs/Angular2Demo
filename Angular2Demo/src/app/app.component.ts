import { Component } from "@angular/core"

@Component({

    selector: 'my-app',
    template: `
             <div>
                <h1>{{GetFullName()}}</h1>
                <img src='{{imagePath}}'/>
                <my-employee></my-employee>
             </div>                         
 `


})  
export class AppComponent {
    pageHeader: string = "Employee Details ";
    imagePath: string = 'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

    firstName: string = 'Emilio';
    lastName : string = 'Barrera';

    GetFullName(): string {

        return  this.firstName + ' ' + this.lastName;

    }
}