import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  data: string = '';
  data2:string=''
  submit() {
    this.data2=this.data
  }
}
