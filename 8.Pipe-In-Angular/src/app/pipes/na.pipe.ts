import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true,
})
export class NaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value !== undefined && value !== null && value !== '') {
      return value;
    } else {
      return "Value Not Available";
    }
  }
}
