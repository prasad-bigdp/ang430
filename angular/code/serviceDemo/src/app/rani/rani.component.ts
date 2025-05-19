import { Component } from '@angular/core';
import { RajuRaniMessangerService } from '../rsni-rani-messanger.service';
@Component({
  selector: 'app-rani',
  standalone: false,
  templateUrl: './rani.component.html',
  styleUrl: './rani.component.css'
})
export class RaniComponent {
  raniData=''
  constructor(public rs:RajuRaniMessangerService) {
     
  }
  getRajuData() {
    this.raniData = this.rs.data; 
  }
}
