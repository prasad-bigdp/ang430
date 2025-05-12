import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeFont',
  standalone: false
})
export class ChangeFontPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
