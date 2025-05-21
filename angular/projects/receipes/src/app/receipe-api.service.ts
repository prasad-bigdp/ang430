import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReceipeAPIService {

  constructor(public obj: HttpClient) { }
  getData() {
    return this.obj.get(`https://dummyjson.com/recipes`);
  }
}
