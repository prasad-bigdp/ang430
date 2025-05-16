import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() message: string = ''
  count = 0;
  data=''
  @Output() childMessage = new EventEmitter()
  send() {
    this.childMessage.emit(this.data)
  }
  incr() {
    this.count++;
  }
}
