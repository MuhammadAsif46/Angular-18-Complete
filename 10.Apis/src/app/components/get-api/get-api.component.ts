import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any[] = [];
  customerList: any[] = [];

  constructor(private http: HttpClient) {
    // this.getAllUsers(); // page load the API call will be made.
    this.getAllCustomers(); //cls page load the API call will be made.
  }

  getAllUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        console.log('response-->', response);
        this.userList = response;
      });
  }
  // .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers1')

  getAllCustomers() {
    this.http
      .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe(
        (response: any) => {
          console.log('CustomerRes-->', response.data);
          this.customerList = response.data;

          // this.userList = response;
        },
        (error) => {
          console.log('Customer Error-->', error);
          console.log('Customer Error-->', error.message);
          // this.customerList = [];
        }
      );
  }
}
