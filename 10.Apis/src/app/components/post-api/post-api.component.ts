import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

 ngOnInit(): void {
     this.getAllDepartment();
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
          this.getAllDepartment()
        } else {
          alert(res.message);
        }
      });
  }

  getAllDepartment() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res:any) => {
        console.log('res1-->', res);
        console.log('res1-->', res.data);

        this.departmentList = res.data;
      });
  }
}
