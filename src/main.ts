import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from 'firebase/app'; // Import Firebase
import 'firebase/auth'; // Import Firebase Authentication if needed
import 'firebase/firestore'; // Import Firebase Firestore if needed

// const auth = firebase.auth();
// Initialize Firebase with your configuration
const firebaseConfig = environment.firebase;

firebase.initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
