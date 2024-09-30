import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  standalone: true,
  imports: [],
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.css',
})
export class CustomBtnComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClick = new EventEmitter<any>()
  onClick() {
    this.onBtnClick.emit("Hii i am from child")
  }
}
