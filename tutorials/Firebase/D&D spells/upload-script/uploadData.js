const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

const databaseURL = 'https://fir-react-tutorial-454e3.firebaseio.com';
firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore('spells.json');
