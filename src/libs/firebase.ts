import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBxilSFn0ihOpNZC72Nyh3e_Hcty0BWbUY',
  authDomain: 'galeriaimagem-77432.firebaseapp.com',
  projectId: 'galeriaimagem-77432',
  storageBucket: 'galeriaimagem-77432.appspot.com',
  messagingSenderId: '426974063753',
  appId: '1:426974063753:web:01c432c6a4a2a2b0a26a58'
};

const firebase = initializeApp(firebaseConfig)
export const storage = getStorage(firebase)