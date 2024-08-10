import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-styles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-styles.component.html',
  styleUrl: './dynamic-styles.component.css',
})
export class DynamicStylesComponent {
  // start work from [ngClass] examples:

  // if condition example : 01
  div1BgColor: string = 'bg-primary';

  bgPrimary() {
    this.div1BgColor = 'bg-primary';
  }
  bgDanger() {
    this.div1BgColor = 'bg-danger';
  }

  // if condition example : 02
  isDiv2Active: boolean = false;

  toggleBgColor() {
    // short way: only use boolean value
    this.isDiv2Active = !this.isDiv2Active;

    // long way:
    // if(this.isDiv2Active === true){
    //   this.isDiv2Active = false;
    // }else{
    //   this.isDiv2Active = true;
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

  studentList: any[] = [
    { stdId: 12, stdName: 'AAA', city: 'Karachi', isActive: true },
    { stdId: 21, stdName: 'BBB', city: 'Hydrabad', isActive: false },
    { stdId: 32, stdName: 'CCC', city: 'Pindi', isActive: true },
    { stdId: 45, stdName: 'DDD', city: 'Punjab', isActive: false },
    { stdId: 91, stdName: 'FFF', city: 'Lahore', isActive: false },
  ];

  // end work from ngFor examples:
}
