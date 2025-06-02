// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth ,getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDBxlhoUHdHxLi_pcfCQ1BqIgmHVSRClmM",
  authDomain: "lms-a-63806.firebaseapp.com",
  projectId: "lms-a-63806",
  storageBucket: "lms-a-63806.firebasestorage.app",
  messagingSenderId: "227950740640",
  appId: "1:227950740640:web:89b769e09b8cc65452f5c5",
  measurementId: "G-2P5Y7ZSD8V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app)
 export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });