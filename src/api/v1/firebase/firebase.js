import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBZjs0_jrNNzSsgqT97tLLMl6s6b-UH8lE",
    authDomain: "gb-react-chat-95fbe.firebaseapp.com",
    databaseURL: "https://gb-react-chat-95fbe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-chat-95fbe",
    storageBucket: "gb-react-chat-95fbe.appspot.com",
    messagingSenderId: "818641762732",
    appId: "1:818641762732:web:b55ee8a9809046f1cfe209",
    measurementId: "G-YK2LX4X5FG"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);