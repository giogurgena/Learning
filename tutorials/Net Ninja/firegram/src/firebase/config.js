import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD5VEQgmQ3sgxW5JowaEMKakxTsWqBwDd0',
  authDomain: 'firegram-86705.firebaseapp.com',
  databaseURL: 'https://firegram-86705.firebaseio.com',
  projectId: 'firegram-86705',
  storageBucket: 'firegram-86705.appspot.com',
  messagingSenderId: '702272697551',
  appId: '1:702272697551:web:0142278e2aaef8d18633ba'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
