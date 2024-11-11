import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { LayoutComponent } from './components/layout/layout.component';
import { GetApiComponent } from './components/get-api/get-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
