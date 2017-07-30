import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC2QUtWOoPG4xLO0_QCTH8a-9bWDIhr-fk",
  authDomain: "pmecentral.firebaseapp.com",
  databaseURL: "https://pmecentral.firebaseio.com",
  projectId: "pmecentral",
  storageBucket: "pmecentral.appspot.com",
  messagingSenderId: "844917410964"
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
}