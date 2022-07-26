import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtV7ovQA3KU901EoFBU0dYczqXAoSFo3U',
  authDomain: 'hackideas-b2448.firebaseapp.com',
  databaseURL: 'https://hackideas-b2448-default-rtdb.firebaseio.com',
  projectId: 'hackideas-b2448',
  storageBucket: 'hackideas-b2448.appspot.com',
  messagingSenderId: '325975072282',
  appId: '1:325975072282:web:8561eb78a3d59c1655bba3',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
