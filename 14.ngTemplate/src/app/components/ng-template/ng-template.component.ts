import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css',
})
export class NgTemplateComponent {
  isUserLoggedIn: boolean = false;
  loggedUserName: string = 'Jhon Elia';
}
