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
  // start work from ngIf examples:

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

  // end work from ngIf examples:

  // start work from ngFor examples:

  // for loop Example : 01 -using array
  cityArray: string[] = [
    'Karachi',
    'Islamabad',
    'Quetta',
    'Peshawar',
    'Lahore',
  ];

  // for loop Example : 02 -using array of objects

  studentList:any[] = [
    { stdId:12, stdName: "AAA", city:"Karachi",isActive:true },
    { stdId:21, stdName: "BBB", city:"Hydrabad",isActive:false },
    { stdId:32, stdName: "CCC", city:"Pindi",isActive:true },
    { stdId:45, stdName: "DDD", city:"Punjab",isActive:false },
    { stdId:91, stdName: "FFF", city:"Lahore",isActive:false },
  ]

  // end work from ngFor examples:
}

