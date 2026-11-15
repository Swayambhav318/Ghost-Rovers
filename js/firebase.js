// ===== Firebase: sign-in (email + password) and cloud saves in Realtime Database =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getDatabase, ref, get, set, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

// Add your own Firebase web app settings here (Firebase console → Project settings → Your apps)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebasedatabase.app",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
const db = getDatabase(fbApp);
setPersistence(auth, browserLocalPersistence).catch(() => {});
isSupported().then((ok) => { if (ok) getAnalytics(fbApp); }).catch(() => {});

// Player saves live at users/{uid}; judge-mode saves live separately at users/{uid}/judge
window.GR_CLOUD = {
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signUp: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  signOut: () => signOut(auth),
  async load(uid, sub) {
    const snap = await get(ref(db, sub ? `users/${uid}/${sub}` : `users/${uid}`));
    return snap.exists() ? snap.val() : null;
  },
  save(uid, data, sub) {
    return update(ref(db, sub ? `users/${uid}/${sub}` : `users/${uid}`), { ...data, updatedAt: serverTimestamp() });
  },
  // Mission debrief votes: one per player at votes/{uid}
  vote: (uid, choice) => set(ref(db, `votes/${uid}`), choice),
  async tally() {
    const snap = await get(ref(db, "votes"));
    const counts = {};
    if (snap.exists()) Object.values(snap.val()).forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
    return counts;
  }
};

onAuthStateChanged(auth, (user) => {
  window.dispatchEvent(new CustomEvent("gr-auth", { detail: user ? { uid: user.uid, email: user.email } : null }));
});
window.dispatchEvent(new Event("gr-cloud-ready"));
