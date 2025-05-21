import { Component } from '@angular/core';
import { ReceipeAPIService } from './receipe-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:any=[]
  constructor(public res: ReceipeAPIService) { 
    this.res.getData().subscribe((r:any) => { this.data = r.recipes; console.log(this.data) })
  }
  
}
