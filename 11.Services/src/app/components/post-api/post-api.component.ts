import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  departmentList: any[] = [];

  http = inject(HttpClient);

  constructor(private deptService: DepartmentService) {
    const res = this.deptService.addTwoNum(15,25);
    console.log(res);
    
  }

  ngOnInit(): void {
    this.getAllDepartment();
    //  console.log("hello");
  }

  // onSave() {
  //   this.http
  //     .post(
  //       'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
  //       this.deptObj
  //     )
  //     .subscribe((res: any) => {
  //       console.log('res-->', res);
  //       console.log('res-->', res.data);

  //       if (res.result) {
  //         alert('Success to add new department');
  //         this.getAllDepartment();
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }

  onSave(){
    this.deptService.saveNewDept(this.deptObj).subscribe((res: any) => {
        console.log('hello1-->', res);
        console.log('hello1-->', res.data);

        if (res.result) {
          alert('Success add new department');
          this.getAllDepartment();
        } else {
          alert(res.message);
        }
      });
  }

  getAllDepartment() {
    this.deptService.getAllDept().subscribe((res: any) => {
      console.log('res1-->', res);
      console.log('res1-->', res.data);
      this.departmentList = res.data;
    });
  }
}
