import { Component } from '@angular/core';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
