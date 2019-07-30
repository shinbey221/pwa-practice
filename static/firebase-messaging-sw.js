importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js')

const config = {
    apiKey: "AIzaSyC7VvZ1ubL0yy02_JL1bQANiejqL_hknII",
    messagingSenderId: "360685413535"
}

if (!firebase.apps.length) {
    const firebaseApp = firebase.initializeApp(config)
}
const messaging = firebase.messaging()

// messaging.onMessage((payload) => {
//   console.log('Message received.', payload)
//   // ...
// })

// messaging.setBackgroundMessageHandler((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload)
//   // Customize notification here
//   var notificationTitle = 'Background Message Title'
//   var notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions)
// })
