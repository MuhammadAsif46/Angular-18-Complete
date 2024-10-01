import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgTemplateComponent } from "./components/ng-template/ng-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
