import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  currentRole: string = '';

  constructor(private deptService: ParentComponent){
    this.deptService.onRoleChange$.subscribe((role:string) => {
      debugger;
      this.currentRole = role;
    })
  }
}
