// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "easefolio.firebaseapp.com",
  projectId: "easefolio",
  storageBucket: "easefolio.appspot.com",
  messagingSenderId: "80940104920",
  appId: "1:80940104920:web:4e0b9e6fb8a037052bebad",
  measurementId: "G-442C2XY2ZS"
};

const isBrowser = typeof window !== 'undefined';
let app : FirebaseApp | undefined;
if (isBrowser) {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
}
// const auth = getAuth(app);
const db = app ? getFirestore(app) : undefined;

export { app, db };