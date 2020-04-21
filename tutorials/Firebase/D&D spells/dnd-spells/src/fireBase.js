import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCZITJOmFXu-U6AWj9N-jz1ee8z4ERG31A',
  authDomain: 'fir-react-tutorial-454e3.firebaseapp.com',
  databaseURL: 'https://fir-react-tutorial-454e3.firebaseio.com',
  projectId: 'fir-react-tutorial-454e3',
  storageBucket: 'fir-react-tutorial-454e3.appspot.com',
  messagingSenderId: '1022817655620',
  appId: '1:1022817655620:web:9756eda012c5f1410dd511',
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
