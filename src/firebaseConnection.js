import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBt0Sz6KP3_2-GpEJ5JclH2RZXG6AHgV0o",
    authDomain: "curso-b1520.firebaseapp.com",
    projectId: "curso-b1520",
    storageBucket: "curso-b1520.appspot.com",
    messagingSenderId: "306400863522",
    appId: "1:306400863522:web:8e6c963001b58d8d46717b",
    measurementId: "G-MHY2J3DW63"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)

  export { db, auth };