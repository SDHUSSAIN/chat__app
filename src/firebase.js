import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "office-chat-2ae13.firebaseapp.com",
    projectId: "office-chat-2ae13",
    storageBucket: "office-chat-2ae13.appspot.com",
    messagingSenderId: "your id",
    appId: "1:682798912013:web:b9cd9a9e20b08ff1b93b44"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider} ;
  export default db;
