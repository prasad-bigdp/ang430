import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public hc: HttpClient) {
    console.log("hello world")
   
   }
  getTrendingMovies(time:string) {
   return this.hc.get(
     `https://api.themoviedb.org/3/trending/movie/${time}?api_key=f4c7648dd22d965f7627d97ee7e60a85`
   );
  }
  getMovieById(id: any) {
    return this.hc.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f4c7648dd22d965f7627d97ee7e60a85`
    );
  }
  getVideosById(id: any) {
    return this.hc.get(`
https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4c7648dd22d965f7627d97ee7e60a85`);
  }
}
