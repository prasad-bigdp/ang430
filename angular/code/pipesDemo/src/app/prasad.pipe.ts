import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad',
  standalone: false
})
export class PrasadPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): any {
    if (value % 2 == 0) {
     return "value is even"
    }
    else {
      return "value is odd"
    }
  }
  

}
