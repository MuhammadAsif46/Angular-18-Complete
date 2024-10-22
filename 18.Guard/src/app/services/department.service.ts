import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../contant/Contant';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getAllDept() {
    return this.http.get(`${Constant.API_URL}/${Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT}`);
  }

  saveNewDept(obj: any) {
    return this.http.post(
      `${Constant.API_URL}/${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,
      obj
    );
  }

  addTwoNum(num1:number, num2:number){
    return num1 + num2;
  }
}
