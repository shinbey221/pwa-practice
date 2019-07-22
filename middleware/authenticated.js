import firebase from 'firebase'

const auth = async ({ store, route, redirect }) => {
  console.log(store.getters['user/isAuthenticated'])
  const user = await new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user))
  })
  console.log(user)
  if (!user && route.name !== 'login') {
    redirect('/login')
  }
  if (user && route.name === 'login') {
    redirect('/')
  }
}

export default auth
