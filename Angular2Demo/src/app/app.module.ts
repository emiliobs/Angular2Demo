import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.componet';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
