import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyD7zde8-vtq3boqJNG0bCUws_5iHpfpOFU",
      authDomain: "book-angular-33cad.firebaseapp.com",
      databaseURL: "https://book-angular-33cad.firebaseio.com",
      projectId: "book-angular-33cad",
      storageBucket: "book-angular-33cad.appspot.com",
      messagingSenderId: "525715770797",
      appId: "1:525715770797:web:a6ea0b068b48f0727aa524",
      measurementId: "G-B3GTMTG0G1"
    }
    firebase.initializeApp(config);
  }
}
