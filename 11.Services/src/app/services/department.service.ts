import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl: string = 'https://projectapi.gerasim.in/api/Complaint';
  constructor(private http: HttpClient) {}

  getAllDept() {
    return this.http.get(`${this.baseUrl}/GetParentDepartment`);
  }

  saveNewDept(obj: any) {
    return this.http.post(
      `${this.baseUrl}/AddNewDepartment`,
      obj
    );
  }

  addTwoNum(num1:number, num2:number){
    return num1 + num2;
  }
}
