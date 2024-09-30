import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostApiComponent } from "./components/post-api/post-api.component";
import { PutApiComponent } from "./components/put-api/put-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostApiComponent, PutApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
