import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  joke:any=''
  constructor(public api: ApiService) {
    this.api.getData().subscribe((data)=>this.joke=data)
   }
  
}
