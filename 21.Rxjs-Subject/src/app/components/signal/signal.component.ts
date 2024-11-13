import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  // Signal Varibale
  firstName = signal('Angular 18'); // string
  rollNo = signal<number>(123); // number
  cityList = signal(['Karachi', 'Lahore']); // Array
  stdData = signal({ stdId: 123, stdName: 'Fahad' }); //Object
  computedFirstName = signal('Jhon'); //string
  computedLastName = signal('Elia'); //string

  // Normal Varibale
  courseName: string = 'HTML'; //string

  // merge first and last name using computed method.
  fullName = computed(
    () => this.computedFirstName() + ' ' + this.computedLastName()
  );

  constructor() {
    setTimeout(() => {
      // this.firstName.set('React js');
      this.courseName = 'CSS';
    }, 3000);
  }
  // changeFirstName handle:
  changeFirstName() {
    this.firstName.set('Javascript');
  }

  // changeRollno handle:
  changeRollNo() {
    this.rollNo.set(456);
  }

  // computed ChangeFirstName handle:
  computedFirstNameHandle() {
    this.computedFirstName.set('hello');
  }

  // computed ChangeFirstName handle:
  computedLastNameHandle() {
    this.computedLastName.set('world');
  }

  // add new City handle using Array:
  addCityNameHandle() {
    this.cityList.set([...this.cityList(), 'Multan']);
  }

  // update obj City handle using object:
  updateObjHandle() {
    this.stdData.set({ ...this.stdData(), stdName: 'Gulam' });
  }
}
