import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyATGdY2rBufWWbKZAi8COM3BdbYTLt0iiM',
  authDomain: 'quit-smoking-70663.firebaseapp.com',
  databaseURL: 'https://quit-smoking-70663.firebaseio.com',
  storageBucket: 'quit-smoking-70663.appspot.com',
  messagingSenderId: '751775985474'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
