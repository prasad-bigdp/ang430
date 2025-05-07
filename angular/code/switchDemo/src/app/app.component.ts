import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  role = "student"
  changeRole(e:any) {
    console.log(e.target.value);
    this.role= e.target.value
  }
}
