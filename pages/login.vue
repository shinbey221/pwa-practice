<template>
  <div class="loginbackgroud">
    <b-container fluid>
      <b-row class="text-center" align-v="center">
        <b-col cols="1" md="4" />
        <b-col cols="10" sm="10" md="4">
          <h1 style="margin-top: 60px;">LOGIN</h1>
          <b-form style="margin-top: 30px;" @submit="signIn">
            <b-form-group label="Email address" label-for="input-1">
              <b-form-input
                id="input-1"
                type="email"
                required
                placeholder="Enter email"
                v-model="email"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="input-2">
              <b-form-input
                id="input-2"
                type="password"
                required
                placeholder="Enter password"
                v-model="password"
              ></b-form-input>
            </b-form-group>
            <b-form-group style="margin-top: 30px;">
              <b-button block type="submit" variant="success">
                Sign In
              </b-button>
            </b-form-group>
            <b-form-group style="margin-top: 30px;">
              <b-button block variant="success" @click="signInForGoogle">
                Sign In For Google
              </b-button>
            </b-form-group>
          </b-form>
          <nuxt-link to="/createAccount">create account</nuxt-link>
        </b-col>
        <b-col cols="1" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      test: 'test',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['setUser']),
    signIn(event) {
      console.log(process.env.API_KEY)
      event.preventDefault()
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          const { displayName, email } = data.user
          this.setUser({ displayName, email }).then(() => {
            this.$router.push('/')
          })
        })
        .catch((error) => {
          alert(error)
        })
    },
    signInForGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().useDeviceLanguage()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('success')
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    pushToCreateAccountPage() {
      console.log('aa')
      this.$router.push('/createAccount')
    }
  }
}
</script>

<style>
.loginbackgroud {
  min-height: 100vh;
}
</style>
