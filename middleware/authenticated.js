import firebase from 'firebase'

const auth = async ({ store, route, redirect }) => {
  const user = await new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user))
  })
  if (!user && !(route.name === 'login' || route.name === 'createAccount')) {
    redirect('/login')
  }
  if (user && !store.getters['user/isAuthenticated']) {
    const { displayName, email } = user
    store.dispatch('user/setUserData', { displayName, email })
  }
  if (user && (route.name === 'login' || route.name === 'createAccount')) {
    redirect('/')
  }
}

export default auth
