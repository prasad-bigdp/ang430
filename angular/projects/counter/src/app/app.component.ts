import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  imgUrl =
    'https://img.freepik.com/free-psd/vintage-wall-clock-with-roman-numerals-timeless-piece_191095-82989.jpg?semt=ais_hybrid&w=740';
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
