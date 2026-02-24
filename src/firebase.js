// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ ADD THIS
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCezH_gEm04amzkKA8BjagG_heskb9ftc",
  authDomain: "education4all-5e1b4.firebaseapp.com",
  projectId: "education4all-5e1b4",
  storageBucket: "education4all-5e1b4.firebasestorage.app",
  messagingSenderId: "528238258259",
  appId: "1:528238258259:web:62c2415fd1612ee605bea6",
  measurementId: "G-SD86NXLQL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
export const auth = getAuth(app);

// Optional
const analytics = getAnalytics(app);