import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from "./components/template-form/template-form.component";
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asif';
}
