import firebase from 'firebase';  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB-NzX07UXvqodHWvIZmSMQBuxcHGV3HPw",
    authDomain: "rn-app-2e4d3.firebaseapp.com",
    databaseURL: "https://rn-app-2e4d3.firebaseio.com",
    projectId: "rn-app-2e4d3",
    storageBucket: "rn-app-2e4d3.appspot.com",
    messagingSenderId: "177434751449",
    appId: "1:177434751449:web:d22ba5d9610c94d5a4e9c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;