import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  em: string = '';
  pwd: string = '';
  constructor(public auth: AngularFireAuth) {}
  submitForm(e: any) {
    e.preventDefault();
    this.auth.signInWithEmailAndPassword(this.em, this.pwd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
