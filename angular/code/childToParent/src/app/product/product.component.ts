import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() category: string = '';
  @Input() price!: number;
  @Input() description: string = '';
  count = 0;
  change() {
    this.count++;
  }


}
