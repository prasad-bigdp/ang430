import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  data:any={}
  constructor(private r: ActivatedRoute) {
     this.r.params.subscribe((res)=>this.data=res)
   }
}
