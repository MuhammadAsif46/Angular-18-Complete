import { Component } from '@angular/core';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";
import { CustomBtnComponent } from "../../reusableComponents/custom-btn/custom-btn.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AlertComponent, CustomBtnComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  getData(data: any) {
    console.log("data-->", data);
    
  }

}
