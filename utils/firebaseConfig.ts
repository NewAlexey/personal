import { initializeApp } from "firebase/app";

import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FB_MEASURE_ID,
    databaseURL: process.env.NEXT_PUBLIC_FB_DB_URL,
};

export const dbRef = ref(getDatabase(initializeApp(firebaseConfig)));