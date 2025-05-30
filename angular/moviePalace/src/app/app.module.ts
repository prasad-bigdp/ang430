import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import Aura from '@primeng/themes/aura';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat'; // or AngularFireModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBgd7ny4OOePzTyNZmKr-VZKHwz_2mIJbk',
      authDomain: 'ang-ott.firebaseapp.com',
      projectId: 'ang-ott',
      storageBucket: 'ang-ott.firebasestorage.app',
      messagingSenderId: '743659957586',
      appId: '1:743659957586:web:0ab8503d72c8ba01c95e8b',
    }),
  ],
  providers: [
    provideHttpClient(),
    AngularFireAuthModule,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
