import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public hc: HttpClient) { }
  
  getData() {
  return  this.hc.get('https://official-joke-api.appspot.com/random_joke');
  }
}
