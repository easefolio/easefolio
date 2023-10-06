// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'easefolio.firebaseapp.com',
  projectId: 'easefolio',
  storageBucket: 'easefolio.appspot.com',
  messagingSenderId: '80940104920',
  appId: '1:80940104920:web:4e0b9e6fb8a037052bebad',
  measurementId: 'G-442C2XY2ZS',
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
