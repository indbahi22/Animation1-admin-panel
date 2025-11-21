// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJrqRTsrpk9ktlZ8GSAA8ViuO1rmzsE-4",
  authDomain: "indbahi-2bcc7.firebaseapp.com",
  databaseURL: "https://indbahi-2bcc7-default-rtdb.firebaseio.com",
  projectId: "indbahi-2bcc7",
  storageBucket: "indbahi-2bcc7.firebasestorage.app",
  messagingSenderId: "966373304385",
  appId: "1:966373304385:web:5fcd15c3272e17251ebec0",
  measurementId: "G-QPHV8GG0EL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };