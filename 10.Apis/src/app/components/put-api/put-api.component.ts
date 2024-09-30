import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css',
})
export class PutApiComponent implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  departmentList: any[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllDepartment();
    console.log('hello');
  }

  onSave() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        console.log('res-->', res);
        console.log('res-->', res.data);

        if (res.result) {
          alert('Success to add new department');
          this.getAllDepartment();
        } else {
          alert(res.message);
        }
      });
  }

  getAllDepartment() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        console.log('res1-->', res);
        console.log('res1-->', res.data);

        this.departmentList = res.data;
      });
  }
  // Edit Handler
  onEdit(data: any) {
    this.deptObj = data;
  }
  // Delete Handler
  onDelete(id: number) {
    const isDelete = confirm('Are your sure want to delete');
    if (isDelete) {
      this.http
        .delete(
          `https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=${id}`
        )
        .subscribe((res: any) => {
          console.log('res-->', res);
          console.log('res-->', res.data);

          if (res.result) {
            alert('Successfully Delete department');
            this.getAllDepartment();
          } else {
            alert(res.message);
          }
        });
    }
  }
  // Update Handler
  onUpdate() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        console.log('res-->', res);
        console.log('res-->', res.data);

        if (res.result) {
          alert('Successfully Updated department');
          this.getAllDepartment();
        } else {
          alert(res.message);
        }
      });
  }
}
