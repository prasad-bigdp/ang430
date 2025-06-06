import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() Title: string = '';
  @Input() url: string = '';
  @Input() data:string=''
}
