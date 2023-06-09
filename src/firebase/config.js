import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVX8ek9WPRvxl1wM2mdY6svqI7xTdw2g0",
    authDomain: "udemy-vue-firebase-8cf06.firebaseapp.com",
    projectId: "udemy-vue-firebase-8cf06",
    storageBucket: "udemy-vue-firebase-8cf06.appspot.com",
    messagingSenderId: "183993478087",
    appId: "1:183993478087:web:bb6113a4b5dc2e9f1747e2"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firebase store
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp}