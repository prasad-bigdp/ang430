import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @ViewChild(CardComponent) card!: CardComponent;
  msg = '';
  childMsg = '';
  c = 0;
  takeChildMsg(data:any) {
    this.childMsg=data
  }
  fun() {
    this.card.incr();
    this.c = this.card.count;
  }
}
