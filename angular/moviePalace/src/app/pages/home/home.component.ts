import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  TMoviesWeek: any = []; TMoviesDay: any = []; time = 'day';
  constructor(public api: ApiService) { }
  getMovies(s: string) {
    console.log(s)
    this.api.getTrendingMovies(s).subscribe((res: any) => {
      this.TMoviesWeek = res.results;
      console.log(this.TMoviesWeek);
    });
  }
  ngOnInit() {
    this.getMovies('day')
  }
}
