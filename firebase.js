//import firebase from 'firebase/app';
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD1HIpRKv1As1qDEIWVIyO3cIK6gNSsfLA",

    authDomain: "fir-plain-auth.firebaseapp.com",

    projectId: "fir-plain-auth",

    storageBucket: "fir-plain-auth.appspot.com",

    messagingSenderId: "372548745940",

    appId: "1:372548745940:web:50bf5ae13628c44a5d5941"

};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);