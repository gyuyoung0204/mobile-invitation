import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyBKG0duVC-eE2HSzUIyQC0qZEwW8UgBYBk",
    authDomain: "gyuyoung0204.firebaseapp.com",
    projectId: "gyuyoung0204",
    storageBucket: "gyuyoung0204.firebasestorage.app",
    messagingSenderId: "1081777785610",
    appId: "1:1081777785610:web:3b084d70c9ec204d6908f3",
    measurementId: "G-01HE3Q1PN5"
  };
  

export const firebaseApp = initializeApp(firebaseConfig);

export const realtimeDb = getDatabase(firebaseApp);
