importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: ''
})

const messaging = firebase.messaging()
