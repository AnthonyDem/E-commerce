import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyB9gPcu6Xjd4bIpQqcjXo7MpyyaTD66axU",
    authDomain: "e-commerce-db-b454d.firebaseapp.com",
    databaseURL: "https://e-commerce-db-b454d.firebaseio.com",
    projectId: "e-commerce-db-b454d",
    storageBucket: "e-commerce-db-b454d.appspot.com",
    messagingSenderId: "257705735976",
    appId: "1:257705735976:web:0b3cfbfeb681a3ae22021d",
    measurementId: "G-X2MS54ZXGZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

