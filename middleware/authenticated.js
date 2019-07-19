const auth = ({ store, route, redirect }) => {
  console.log(store.getters['user/isAuthenticated'])
  if (!store.getters['user/isAuthenticated'] && route.name !== 'login') {
    redirect('/login')
  }
  if (store.getters['user/isAuthenticated'] && route.name === 'login') {
    redirect('/')
  }
}

export default auth
