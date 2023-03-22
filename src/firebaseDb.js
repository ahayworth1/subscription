import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCJDET4w_sVrw5VzgrC5EKrgT0Dg6Cn1i0',
  authDomain: 'my-subscriptions-1b856.firebaseapp.com',
  projectId: 'my-subscriptions-1b856',
  storageBucket: 'my-subscriptions-1b856.appspot.com',
  messagingSenderId: '590012138396',
  appId: '1:590012138396:web:a0cbc69704c460d6d4be59'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
