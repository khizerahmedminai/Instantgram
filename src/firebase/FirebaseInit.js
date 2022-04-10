import fb from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseApp = fb.initializeApp({
  apiKey: 'AIzaSyA1CQOIC2hYFFWwa9oiD8rphkWwI6qHssQ',
  authDomain: 'instantgram-de7fd.firebaseapp.com',
  projectId: 'instantgram-de7fd',
  storageBucket: 'instantgram-de7fd.appspot.com',
  messagingSenderId: '989218138797',
  appId: '1:989218138797:web:5778e882c778c97a48f424',
  measurementId: 'G-GVXCSXL9G6',
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
