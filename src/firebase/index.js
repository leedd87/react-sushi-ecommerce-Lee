import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnWd8NAVN63-nL4-9P5UTIkgkep-ASN3k",
    authDomain: "sushi-ecommerce-lee.firebaseapp.com",
    projectId: "sushi-ecommerce-lee",
    storageBucket: "sushi-ecommerce-lee.appspot.com",
    messagingSenderId: "952926876809",
    appId: "1:952926876809:web:d492603af6ecfab2144258"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
