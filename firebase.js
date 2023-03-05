// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNfZbOUhQS3Ccrzy2GUKmRAJzfee6Wxo8",
  authDomain: "fir-auth-b8927.firebaseapp.com",
  projectId: "fir-auth-b8927",
  storageBucket: "fir-auth-b8927.appspot.com",
  messagingSenderId: "243752490379",
  appId: "1:243752490379:web:9a9ed244e6c354cc788b8e",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
