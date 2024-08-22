import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  dayNumber:string ='';
}
