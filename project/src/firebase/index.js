import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDF769FELOj9Zi6GnrKLpqHxNlVvxQ8XvI",
    authDomain: "upx3-6d9e4.firebaseapp.com",
    projectId: "upx3-6d9e4",
    storageBucket: "upx3-6d9e4.appspot.com",
    messagingSenderId: "1091442551179",
    appId: "1:1091442551179:web:1a035e1542ce11eb6be78e",
    measurementId: "G-5CGV6NY6DC"
}

const App = initializeApp(firebaseConfig)
const auth = getAuth(App)
const db = getFirestore(App)
const analytics = getAnalytics(App)

// connectFirestoreEmulator(db, 'localhost', 8081)
// connectAuthEmulator(auth, 'http://localhost:9099')
// connectFunctionsEmulator(fbFunctions, 'localhost', 5001)
// connectStorageEmulator(storage, '127.0.0.1', 9199)

export { auth, db, analytics }