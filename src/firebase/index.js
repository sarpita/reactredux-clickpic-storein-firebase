import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAvQq_2w4AMa6-0v4wu3L6C9PA0fkela4E",
    authDomain: "react-firebase-usermonitor.firebaseapp.com",
    databaseURL: "https://react-firebase-usermonitor.firebaseio.com",
    projectId: "react-firebase-usermonitor",
    storageBucket: "react-firebase-usermonitor.appspot.com",
    messagingSenderId: "356084236151",
    appId: "1:356084236151:web:0d2fca52089e697836ab72",
    measurementId: "G-2C091NDJMN"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
