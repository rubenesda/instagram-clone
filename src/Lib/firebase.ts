import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// I want to import seed file here (only ONCE!)
// import { seedDatabase } from '../seed';

// const config = {};
const config = {
  apiKey: 'AIzaSyBb2E-11KsHZdKuVhKVTDrs8QD2MMlHdjE',
  authDomain: 'instagram-reactjs-clone-25859.firebaseapp.com',
  projectId: 'instagram-reactjs-clone-25859',
  storageBucket: 'instagram-reactjs-clone-25859.appspot.com',
  messagingSenderId: '226231575879',
  appId: '1:226231575879:web:4ff23bd619691d11f1d862',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);
export { firebase, FieldValue };
