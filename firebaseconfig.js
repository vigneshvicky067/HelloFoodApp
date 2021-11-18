// Import the functions you need from the SDKs you need
import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCmM9yrFAzRQze8LtSf5uo85dVJcwvImYs",
  authDomain: "hello-77fa1.firebaseapp.com",
  projectId: "hello-77fa1",
  storageBucket: "hello-77fa1.appspot.com",
  messagingSenderId: "221871970601",
  appId: "1:221871970601:web:7f4d9a9295f94429fc3f38"
};
// Initialize Firebase
let app;
if(firebase.apps.length===0){
 app=firebase.initializeApp(firebaseConfig);
}
else{
  app=firebase.app();
}
const auth=firebase.auth();
export {auth};

