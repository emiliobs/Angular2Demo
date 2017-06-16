import { Component } from "@angular/core"

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.componet.css']

})

export class EmployeeComponent{

    firstName: string = "Emilio";
    lastName: string = "Barrera";
    gender: string = "Male";
    age: string = "25";
    
}