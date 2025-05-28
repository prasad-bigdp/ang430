import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  
  submitForm(a: any,b:any) {
    console.log(a,b);
  }
}
