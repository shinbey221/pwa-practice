import firebase from 'firebase'
import axios from 'axios'

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID
})
const messaging = firebase.messaging()
messaging
  .requestPermission()
  .then(() => {
    console.log('Have Permisson')
    return messaging.getToken()
  })
  .then((token) => {
    const url = `https://us-central1-pwa-practice-93929.cloudfunctions.net/addMessage?token=${token}`
    axios.get(url)
  })
  .catch((error) => {
    console.log(error)
  })
messaging.onMessage((payload) => {
  console.log('message: ', payload)
})
export default firebase
