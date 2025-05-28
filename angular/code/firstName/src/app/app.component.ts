import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-boot',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstName';
   o = new Observable((s) => {
    s.next(5)
     setTimeout(() => s.next(6), 1000
     );
     s.next(7)
     s.next(8);
     setTimeout(() => s.complete(),5000);
  });
  sub = new BehaviorSubject(0);
  fun() {
    this.o.subscribe((d)=>console.log(d))
  }
 
}
