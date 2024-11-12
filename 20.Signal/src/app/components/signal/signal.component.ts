import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  firstName = signal('Angular 18');
  courseName: string = 'HTML';

  rollNo = signal<number>(123);

  computedFirstName = signal('Jhon');
  computedLastName = signal('Elia');

  fullName = computed(() => this.changeFirstName + ' ' + this.computedLastName);

  constructor() {
    setTimeout(() => {
      // this.firstName.set('React js');
      this.courseName = 'CSS';
    }, 3000);
  }

  changeFirstName() {
    this.firstName.set('Javascript');
  }
  changeRollNo() {
    this.rollNo.set(456);
  }
  computedFirstNameHandle() {
    this.computedFirstName.set("hello");
  }
  computedLastNameHandle() {
    this.computedLastName.set("world");
  }
}
