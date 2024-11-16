import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [ParentComponent, ChildComponent, FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent {
  selectedRole: string = '';

  constructor(private deptService: ParentComponent) {
    
  }

  onRoleChange(role: string) {
    debugger;
    this.deptService.onRoleChange$.next(role);
  }
}
