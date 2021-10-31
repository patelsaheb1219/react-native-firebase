import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.firebase.apiKey,
  authDomain: Constants.manifest.firebase.authDomain,
  databaseURL: Constants.manifest.firebase.databaseURL,
  projectId: Constants.manifest.firebase.projectId,
  storageBucket: Constants.manifest.firebase.storageBucket,
  messagingSenderId: Constants.manifest.firebase.messagingSenderId,
  appId: Constants.manifest.firebase.appId,
};
let Firebase;
if (firebase.apps.length === 0) {
  Firebase = initializeApp(firebaseConfig);
}

export default Firebase;