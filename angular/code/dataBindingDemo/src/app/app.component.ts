import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDisable = false;
  count = 0;
  n = 'PRASAD';
  na = '';
  a = 10;
  b = 20;
  imgUrl:string =
    'https://m.media-amazon.com/images/M/MV5BZGViNzZiMDEtZDk4Ny00MzNhLWI5ZTItZDY4MjAwMDk5OWQxXkEyXkFqcGc@._V1_.jpg';
  names: string[] = [ "geetha", "seetha", "shiva" ]
  user = {
    name:"shekhar",age:55
  }
  incr() {
    this.count++; 
  }
}
