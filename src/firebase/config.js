const firebaseConfig = {
  apiKey: "AIzaSyAql_qrLj0_FcTF_r6HDGoMxAszW4mfTxk",
  authDomain: "spell-sheet.firebaseapp.com",
  projectId: "spell-sheet",
  storageBucket: "spell-sheet.firebasestorage.app",
  messagingSenderId: "213601445425",
  appId: "1:213601445425:web:f966deb65cc4918ea51710",
  measurementId: "G-KVXVMMYTV0"
};

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const app = initializeApp(firebaseConfig);

// App Check with environment-specific provider
if (import.meta.env.DEV) {
  // Development: Use debug token
  // Set this in your browser console first:
  // self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Ld1_P4rAAAAAKqOM6S92CShx_AGR3qW50GXeiz9'),
    isTokenAutoRefreshEnabled: true
  });
} else {
  // Production: Use reCAPTCHA
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Ld1_P4rAAAAAKqOM6S92CShx_AGR3qW50GXeiz9'),
    isTokenAutoRefreshEnabled: true
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);