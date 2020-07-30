import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fake-gram.firebaseapp.com",
  databaseURL: "https://fake-gram.firebaseio.com",
  projectId: "fake-gram",
  storageBucket: "fake-gram.appspot.com",
  messagingSenderId: "893611184453",
  appId: precess.env.REACT_APP_APP_ID,
  measurementId: "G-D1S2JHRH1X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }