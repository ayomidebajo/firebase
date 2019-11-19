import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB-lUroTMMBEYwgC7IL3AJ-UkiAvSm4FX8",
    authDomain: "cinder-plans.firebaseapp.com",
    databaseURL: "https://cinder-plans.firebaseio.com",
    projectId: "cinder-plans",
    storageBucket: "cinder-plans.appspot.com",
    messagingSenderId: "1071644966364",
    appId: "1:1071644966364:web:25b3aa95e88ff140472319",
    measurementId: "G-X0JH51TMF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
