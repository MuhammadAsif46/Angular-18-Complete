import { Component } from '@angular/core';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
