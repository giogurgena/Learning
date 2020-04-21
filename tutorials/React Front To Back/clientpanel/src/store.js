import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
//todo

const firebaseConfig = {
  apiKey: 'AIzaSyBabWi50NhmkM4Quubr9Tyn4EkuNkSTDIY',
  authDomain: 'clientpanel-7f13c.firebaseapp.com',
  databaseURL: 'https://clientpanel-7f13c.firebaseio.com',
  projectId: 'clientpanel-7f13c',
  storageBucket: 'clientpanel-7f13c.appspot.com',
  messagingSenderId: '509351213051',
  appId: '1:509351213051:web:0c76fb5996de8cd8357d5e',
  measurementId: 'G-NN3G5X0ENE'
};

//react redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
const firestore = firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
