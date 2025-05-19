import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RajuRaniMessangerService {
   data:string=''
  constructor() { }
  sendToRani(rdata:any){
    this.data = rdata;
  }

}
