import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicStylesComponent } from './components/dynamic-styles/dynamic-styles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicStylesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
