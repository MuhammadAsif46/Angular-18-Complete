import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css',
})
export class LifeCycleEventComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy,
    OnChanges
{
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges");
      
  }

  ngOnInit(): void {
    // Use in Apis call
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
