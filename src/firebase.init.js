import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbc-lboBwqW2E5Gq_cgGryC60mK2mBmmg",
    authDomain: "cool-tools-8bee2.firebaseapp.com",
    projectId: "cool-tools-8bee2",
    storageBucket: "cool-tools-8bee2.appspot.com",
    messagingSenderId: "638542904360",
    appId: "1:638542904360:web:a1b7b5281f7a2cd953891d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;