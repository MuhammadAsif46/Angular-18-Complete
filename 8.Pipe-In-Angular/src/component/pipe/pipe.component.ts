import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { NaPipe } from '../../app/pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "Angular" 
  info: string = "This is a new session"

  currentDate: Date =  new Date() 

  studentList: any= {
    name: "John Doe",
    age: 25,
    grade: "A",
    city:""
    // city:"Karachi"
  }

}
