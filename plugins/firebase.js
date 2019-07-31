import firebase from 'firebase'
// import axios from 'axios'

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID
})
const messaging = firebase.messaging()
messaging.onMessage((payload) => {
  console.log('message: ', payload)
})
export default firebase
