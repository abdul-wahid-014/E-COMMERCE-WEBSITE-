// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2GRIcpizjD8uaaBS9FbW6rjk2RwfAMpc",
    authDomain: "ecommerceproject-cb13e.firebaseapp.com",
    projectId: "ecommerceproject-cb13e",
    storageBucket: "ecommerceproject-cb13e.appspot.com",
    messagingSenderId: "516243033562",
    appId: "1:516243033562:web:1c3141ee6d7f4ae08c84e3",
    measurementId: "G-PVFZE7R7DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function signupUser(data) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('signupUser',data)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log('signupUser',errorMessage)

        });
}
function loginUser(data) {

    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('loginUser',data)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('loginUser',errorMessage)

        });

}

function logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
async function extradata(data){
    try {
        const docRef = await addDoc(collection(db, "user"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }}


export { signupUser, loginUser ,auth ,logout,extradata}

