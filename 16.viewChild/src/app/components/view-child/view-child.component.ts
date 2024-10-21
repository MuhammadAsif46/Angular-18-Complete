import { Component, ElementRef, ViewChild ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('#txt') textBox?: ElementRef;


  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    // console.log(value);
    // debugger;
    
  }
  
}
