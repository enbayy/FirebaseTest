import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6lJRp6_D1MkQsM4w0Fa4c4TpCYr7u6sk",
    authDomain: "fir-test-20da8.firebaseapp.com",
    projectId: "fir-test-20da8",
    storageBucket: "fir-test-20da8.appspot.com",
    messagingSenderId: "560522004464",
    appId: "1:560522004464:web:0eccaf6527e3f3c0debf35"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);