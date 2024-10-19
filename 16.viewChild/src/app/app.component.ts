import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewChildComponent } from './components/view-child/view-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
