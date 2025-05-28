import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form = new FormGroup({
    em: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  });
  submitForm(e: Event) {
    e.preventDefault()
    console.log(this.form)
  }
}
