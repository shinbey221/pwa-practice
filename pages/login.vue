<template>
  <div>
    <b-container fluid>
      <b-row class="text-center" align-v="center">
        <b-col cols="1" md="5" />
        <b-col cols="10" sm="10" md="2">
          <h1 style="margin-top: 60px;">
            LOGIN
          </h1>
          <b-form style="margin-top: 30px;" @submit="signIn">
            <b-form-group label="Email address" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                required
                placeholder="Enter email"
              />
            </b-form-group>
            <b-form-group label="Password" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="password"
                type="password"
                required
                placeholder="Enter password"
              />
            </b-form-group>
            <b-form-group style="margin-top: 30px;">
              <b-button block type="submit" variant="success">
                Sign In
              </b-button>
            </b-form-group>
          </b-form>
          <nuxt-link to="/createAccount">
            create account
          </nuxt-link>
        </b-col>
        <b-col cols="1" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    signIn(event) {
      event.preventDefault()
      const user = {
        email: this.email,
        password: this.password
      }
      this.login(user)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    },
    pushToCreateAccountPage() {
      this.$router.push('/createAccount')
    }
  }
}
</script>
