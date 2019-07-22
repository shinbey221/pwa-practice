import firebase from '@/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  userData: null,
  test: ''
})

export const getters = {
  isAuthenticated(state) {
    return !!state.userData
  }
}

export const mutations = {
  setAuthUser(state, payload) {
    state.userData = payload
  }
}

export const actions = {
  googleLogin() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithRedirect(googleProvider)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  },
  setUser({ commit }, payload) {
    commit('setAuthUser', payload)
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setAuthUser', null)
          resolve()
        })
    })
  }
}
