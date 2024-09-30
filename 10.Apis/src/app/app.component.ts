import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApiComponent } from "./components/get-api/get-api.component";
import { PostApiComponent } from "./components/post-api/post-api.component";
import { PutApiComponent } from "./components/put-api/put-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetApiComponent, PostApiComponent, PutApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
