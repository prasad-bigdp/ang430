import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  em: string = ''; pwd: string = '';
  constructor(public auth: AngularFireAuth) {
    
  }
  signupForm(e:Event) {
    e.preventDefault()
    console.log(this.em, this.pwd)
    this.auth.createUserWithEmailAndPassword(this.em, this.pwd)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    
   }
}
