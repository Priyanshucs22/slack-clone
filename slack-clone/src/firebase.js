import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCzzN19tThTu8eIrWRo3uV1GuFlBGpQwmU",
  authDomain: "slack-clone-b8f17.firebaseapp.com",
  projectId: "slack-clone-b8f17",
  storageBucket: "slack-clone-b8f17.appspot.com",
  messagingSenderId: "184002945001",
  appId: "1:184002945001:web:1152b18baf935a43cdb578",
  measurementId: "G-1YQ434TVY9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;