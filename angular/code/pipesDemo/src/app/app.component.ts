import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  font="arial"
  name = "prasad";
  name2 = "SHEKHAR"
  n = 25.13146;
  price = 201;
  obj = {
    name: "raj",
    age:25
  }
  dt = new Date();
  a = 25;
  title = "john"
  arr=["raj","john","shekhar"]
}
