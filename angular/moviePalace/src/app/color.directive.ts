import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: false
})
export class ColorDirective {

  constructor() { }

}
