import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "myvideoapp-ff924.firebaseapp.com",
  projectId: "myvideoapp-ff924",
  storageBucket: "myvideoapp-ff924.appspot.com",
  messagingSenderId: "475686178410",
  appId: "1:475686178410:web:c6c915965b2a04befd0413"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
