import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  movieUrl = '';
  movieName = '';
  url = '';
  name = '';
  printMovie() {
    if ((this.movieUrl.trim() != '') && (this.movieName.trim() != '')) {
      this.url = this.movieUrl;
      this.name = this.movieName;
    }
    else {
      alert("please enter both movie link and name")
    }
     this.movieUrl = '';
     this.movieName = '';
  }
}
