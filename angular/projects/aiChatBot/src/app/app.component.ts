import { Component } from '@angular/core';
import { AiService } from './ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  que: string = '';
  answer: string = '';
  data: any[] = [];
  isLoading = false;

  constructor(public ai: AiService) {}
  getData() {
    this.isLoading = true;
    this.ai.askQuestion(this.que).subscribe((res: any) => {
      this.isLoading = false;
      this.data.push(...this.data, {
        q: this.que,
        a: res.candidates[0].content.parts[0].text,
      });
      this.answer = res.candidates[0].content.parts[0].text;
      this.que = '';
    });
  }
}
