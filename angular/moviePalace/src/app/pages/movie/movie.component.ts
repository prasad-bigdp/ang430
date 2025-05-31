import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieId: any = ''
  movieDetails: any = ''
  video: any = ''
  showVideo = false;
  constructor(public ac: ActivatedRoute, public api:ApiService) {
    this.ac.params.subscribe((p:any)=>this.movieId=p.id)
  }
  update() {
    this.api.updateWishList()
  }
  ngOnInit() {
    this.api.getMovieById(this.movieId).subscribe((res) => this.movieDetails = res)
    this.api.getVideosById(this.movieId).subscribe((res: any) => {
      this.video = res.results;
      console.log(this.video[0].key)
    })
  }
  clickWatchNow() {
    this.showVideo=true
  }
}
