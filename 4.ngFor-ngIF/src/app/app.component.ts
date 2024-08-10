import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConditionsComponent } from "./components/conditions/conditions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConditionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
