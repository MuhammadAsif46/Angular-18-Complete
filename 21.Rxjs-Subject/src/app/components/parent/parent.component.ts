import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  // Subject Create --->
  // Subject name  - dataType value hold
  onRoleChange$: Subject<string> = new Subject<string>();
}
