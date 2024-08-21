import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css',
})
export class IfelseComponent {
  div1IsVisible: boolean = true;
  div2IsVisible: boolean = true;

  num1:string = "";
  num2:string = "";
  selectedStatus:string = "";

  showDiv1() {
    this.div1IsVisible = true;
  }
  hideDiv1() {
    this.div1IsVisible = false;
  }
  toggleDiv2() {
    this.div2IsVisible = !this.div2IsVisible;
  }
}
