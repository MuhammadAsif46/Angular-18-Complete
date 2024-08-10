import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css',
})
export class ConditionsComponent {
  // if condition example : 01
  div1IsVisible: boolean = true;

  showDiv1() {
    this.div1IsVisible = true;
  }
  hideDiv1() {
    this.div1IsVisible = false;
  }

  // if condition example : 02
  div2IsVisible: boolean = true;

  toggleDiv2() {
    // short way: only use boolean value
    this.div2IsVisible = !this.div2IsVisible;

    // long way:
    // if(this.div2IsVisible === true){
    //   this.div2IsVisible = false;
    // }else{
    //   this.div2IsVisible = true;
    // }
  }

  // if condition example : 03
  num1: string = '';
  num2: string = '';

  // if condition example : 04
  div4IsChecked: boolean = true;
  selectedCity: string = '';
}

