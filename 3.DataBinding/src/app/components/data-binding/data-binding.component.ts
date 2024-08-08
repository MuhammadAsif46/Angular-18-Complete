import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string, number, boolean, date types:

  courseName: string = "Angular-18";  //string
  inputType = "radio";                //string
  rollNo:number = 122;                //number
  isActive: boolean = true;           //boolean
  birthDate: Date = new Date();       //Date
  myClass = "bg-danger"
  cityName: string = "Karachi";        //string

  //signal new A-18: just like a varibale

  firstName = signal("Asif Ahmed");

  constructor(){

  }

  changeCourseName(){
    this.courseName = "React Js";
    this.firstName.set("Jhon Elia");
  }

  showAlert(message:string){
    alert(message);
  }
}
