import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifeCycleEventComponent } from "./components/life-cycle-event/life-cycle-event.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LifeCycleEventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
