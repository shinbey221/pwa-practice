<template>
  <div class="loginbackgroud">
    <b-row class="text-center" align-v="center">
      <b-col cols="1" md="4" />
      <b-col cols="10" sm="10" md="4">
        <h1 style="margin-top: 60px;">
          Create Account
        </h1>
      </b-col>
    </b-row>
    <b-container fluid>
      <b-row class="text-center" align-v="center">
        <b-col cols="1" md="5" />
        <b-col cols="10" sm="10" md="2">
          <b-form style="margin-top: 30px;" @submit="signUp">
            <b-form-group label="User Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="userName"
                required
                placeholder="Enter User Name"
              />
            </b-form-group>
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
            <b-form-group label="ConfilmPassword" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="confilmPassword"
                type="password"
                required
                placeholder="Enter confilm password"
              />
            </b-form-group>
            <b-form-group style="margin-top: 30px;">
              <b-button block type="submit" variant="success">
                Sign Up
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
// import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      confilmPassword: ''
    }
  },
  methods: {
    ...mapActions('user', ['createUser']),
    signUp() {
      event.preventDefault()
      if (this.password !== this.confilmPassword) {
        alert('Not match confilm password.')
        return
      }
      const user = {
        userName: this.userName,
        email: this.email,
        password: this.password
      }
      this.createUser(user)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
