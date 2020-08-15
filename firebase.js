import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYa2TvG0NQvTX0_zKLfFqmabm2k3BfexQ',
  authDomain: 'react-twitter-clon.firebaseapp.com',
  databaseURL: 'https://react-twitter-clon.firebaseio.com',
  projectId: 'react-twitter-clon',
  storageBucket: 'react-twitter-clon.appspot.com',
  messagingSenderId: '1063181105715',
  appId: '1:1063181105715:web:37a422cd39c3b4edccc146',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
