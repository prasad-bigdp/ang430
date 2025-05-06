import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isPrasad: boolean = false;
  user: string = "teacher"
  isTeacher: boolean = false;
  isStudent: boolean = false;
  isGood:boolean = true
  change() {
    if (this.isPrasad) {
      this.isPrasad=false
    }
    else {
      this.isPrasad=true
    }
  }
}
