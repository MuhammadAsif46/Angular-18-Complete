import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { SignalComponent } from "./components/signal/signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
