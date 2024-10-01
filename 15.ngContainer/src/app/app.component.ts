import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgContainerComponent } from "./components/ng-container/ng-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
