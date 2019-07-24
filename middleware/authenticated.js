import firebase from 'firebase'

const auth = async ({ store, route, redirect }) => {
  const user = await new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user))
  })
  if (!user && route.name !== 'login') {
    if (route.name !== 'createAccount') {
      redirect('/login')
    }
  }
  if (user && route.name === 'login') {
    redirect('/')
  }
}

export default auth
