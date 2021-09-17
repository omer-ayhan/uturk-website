import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt_vc6vzQX3Z0Cm0uCEftsnYBLsAWHas8",
  authDomain: "uturk-admin-website.firebaseapp.com",
  projectId: "uturk-admin-website",
  storageBucket: "uturk-admin-website.appspot.com",
  messagingSenderId: "811350201672",
  appId: "1:811350201672:web:2f1cf91a3bc137d4640f7d",
  measurementId: "G-DENS4P5C9H",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = app.storage();
const auth = app.auth();

export { db, storage, app, auth };
