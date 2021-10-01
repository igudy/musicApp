import firebase from 'firebase/app';
import 'firebase/auth';

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDOMNbbI4wuwQAWsi7xunjbwHVIp6xiQkM",
   authDomain: "musicplayer-8caa0.firebaseapp.com",
   projectId: "musicplayer-8caa0",
   storageBucket: "musicplayer-8caa0.appspot.com",
   appId: "1:419865975945:web:241f30c990b091f1b87a58"
 };

 // Initialize Firebase
 export default app = initializeApp(firebaseConfig);