import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  wishListCount!: number 
  constructor(public api:ApiService) {
 
  }
  ngOnInit() {
    this.api.sub.subscribe((res)=>this.wishListCount=res)
  }
}
