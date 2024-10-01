import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css',
})
export class NgContainerComponent {
  isContainer: boolean = true;
  userList: any[] = [];
  isApi : boolean = false;


  http = inject(HttpClient);
  // http = inject(HttpClient)


  getData() {
    this.isApi = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        console.log('res -->', res);
        this.userList = res;
        this.isApi = false;
      });
  }
}
