import firebase from "firebase";


const firebaseConfig = {
  apiKey: 'AIzaSyAjL08uhIQzevZcv-aSE6SpHasPz4yH8Ec',
  authDomain: 'challenge-ed8a2.firebaseapp.com',
  databaseURL: 'https://challenge-ed8a2.firebaseio.com',
  projectId: 'challenge-ed8a2',
  storageBucket: 'challenge-ed8a2.appspot.com',
  messagingSenderId: '491715336182',
  appId: '1:491715336182:web:42eff74848330424a8d9d7',
  measurementId: 'G-TE4HF0HZ6R',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};