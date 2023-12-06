import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const app = initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });

const app = initializeApp({
    apiKey: "AIzaSyBB7ts6auPmEYNkTDoGuMhnjSHMckz7GbQ",
    authDomain: "task-auth-c5b5f.firebaseapp.com",
    projectId: "task-auth-c5b5f",
    storageBucket: "task-auth-c5b5f.appspot.com",
    messagingSenderId: "621079443760",
    appId: "1:621079443760:web:de589373a09fbd871fb0f5",
    measurementId: "G-B9151TR3FY"
})

const auth = getAuth(app);

export { auth }
