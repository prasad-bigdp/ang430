import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'child2parent';
  quo: any = {
    quote: '',
    author:''
  };
  constructor() {
    fetch('https://dummyjson.com/quotes/random')
      .then((res: any) => res.json())
      .then((q: any) => this.quo = q)
      .catch((err: any) => console.log(err));
  }
}
