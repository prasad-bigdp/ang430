import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  arr = [ "PRASAD", "shekhar" ]; url = '';
  fruits = [ "papaya", "Mango", "banana" ];
  movies = [
    {Title:"kunfu panda",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrakPTsqdEOxYzMjxiAu2V8Lb_MV8luTzwiGTuyhzcnUdL5m5Pn8P0QUvDsOqSol-i27-eSg"},
     {
       Title: "KArate Kid",
       url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrakPTsqdEOxYzMjxiAu2V8Lb_MV8luTzwiGTuyhzcnUdL5m5Pn8P0QUvDsOqSol-i27-eSg"
    }
  ]
}
