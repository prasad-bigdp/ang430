import { Component } from '@angular/core';
import { RajuRaniMessangerService } from '../rsni-rani-messanger.service';
@Component({
  selector: 'app-raju',
  standalone: false,
  templateUrl: './raju.component.html',
  styleUrl: './raju.component.css'
})
export class RajuComponent {
  inp = ''
  constructor(public rr:RajuRaniMessangerService) {
    console.log(this.rr.data)
  }
  fun() {
    this.rr.data = this.inp; 
  }
}
