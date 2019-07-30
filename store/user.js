import firebase from '@/plugins/firebase'

export const state = () => ({
  userData: null
})

export const getters = {
  isAuthenticated(state) {
    return !!state.userData
  },
  getUserData(state) {
    return state.userData
  }
}

export const mutations = {
  setUser(state, payload) {
    state.userData = payload
  }
}

export const actions = {
  async login({ commit }, user) {
    try {
      const result = await firebaseLogin(user)
      commit('setUser', result)
      return
    } catch (e) {
      throw new Error(e)
    }
  },
  async logout({ commit }) {
    try {
      await firebaseLogout()
      return
    } catch (e) {
      throw new Error(e)
    }
  },
  async createUser({ commit }, user) {
    const createData = {
      email: user.email,
      password: user.password
    }
    try {
      await firebaseCreateUser(createData)
      await firebaseUpdateUser(user.userName)
      const resultLogin = await firebaseLogin(user)
      commit('setUser', resultLogin)
      return resultLogin
    } catch (e) {
      throw new Error(e)
    }
  },
  setUserData({ commit }, user) {
    commit('setUser', user)
  }
}

const firebaseLogin = (user) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const { displayName, email } = data.user
        resolve({ displayName, email })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const firebaseLogout = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const firebaseCreateUser = (user) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const firebaseUpdateUser = (userName) => {
  const user = firebase.auth().currentUser
  return new Promise((resolve, reject) => {
    user
      .updateProfile({
        displayName: userName
      })
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}
