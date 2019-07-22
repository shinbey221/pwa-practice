<template>
  <div class="loginbackgroud">
    <b-container fluid>
      <b-row class="text-center" align-v="center">
        <b-col cols="1" md="4" />
        <b-col cols="10" sm="10" md="4">
          <b-form style="margin-top: 60px;" @submit="signIn">
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
            <b-form-group style="margin-top: 60px;">
              <b-button block type="submit" variant="success">
                Sign In
              </b-button>
            </b-form-group>
          </b-form>
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
    }
  }
}
</script>

<style>
.loginbackgroud {
  min-height: 100vh;
  background: rgb(231, 231, 231);
}
</style>
