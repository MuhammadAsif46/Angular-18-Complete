import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  cityArray: string[] = ['karachi', 'Lahore', 'Islamabad', 'Pindi'];

  studentList: any[] = [
    { stdId: 18, name: 'AAA', city: 'Karchi', isActive: true },
    { stdId: 78, name: 'BBB', city: 'Lahore', isActive: false },
    { stdId: 54, name: 'CCC', city: 'Islamabad', isActive: true },
    { stdId: 23, name: 'DDD', city: 'Pindi', isActive: false },
  ];
}
