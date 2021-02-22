// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBBTzetlbuDc4BnNdpcmYg39j3i0iuQ6h4",
    authDomain: "aswin-netflix.firebaseapp.com",
    projectId: "aswin-netflix",
    storageBucket: "aswin-netflix.appspot.com",
    messagingSenderId: "790860609372",
    appId: "1:790860609372:web:017bca75586a1509633399",
    measurementId: "G-RG6WKXZ4YY"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export {auth}
  export default db