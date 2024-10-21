import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

router = inject(Router)
isUserData : any;

constructor(){
  const loggedUser = localStorage.getItem('userData');
  if (loggedUser !== null) { 
    this.isUserData = JSON.parse(loggedUser)
  }
}

  logout(){
    localStorage.removeItem('userName');
    this.router.navigateByUrl("login")
  }

}
