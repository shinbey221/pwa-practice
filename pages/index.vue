<template>
  <div>
    <div class="inner">
      <h4 class="center">User Name : {{ getUserData.displayName }}</h4>
      <h4 class="center">Mail Address : {{ getUserData.email }}</h4>
      <div class="center" style="margin-top: 30px;">
        <b-button variant="outline-primary" @click="doLogout">
          Logout
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      test: ''
    }
  },
  computed: {
    ...mapGetters('user', ['getUserData'])
  },
  created() {
    const messaging = firebase.messaging()
    messaging.usePublicVapidKey(
      'BEb3_m7a3jwE-i08JtKUVX3Y3jsWaMUrVNJpwuq4MM-dQ7Iw1p5jzxkKQym7MrctmIASmqXRXyKa3cWPqbqhjL4'
    )
    messaging
      .requestPermission()
      .then(() => {
        messaging
          .getToken()
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken)
              // sendTokenToServer(currentToken)
              // updateUIForPushEnabled(currentToken)
            } else {
              // Show permission request.
              // Show permission UI.
              // updateUIForPushPermissionRequired()
              // setTokenSentToServer(false)
            }
          })
          .catch((err) => {
            console.log('not', err)
          })
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err)
      })
    // const messaging = firebase.messaging()
    // messaging
    //   .requestPermission()
    //   .then(() => {
    //     console.log('Have permission')
    //     return messaging.getToken()
    //   })
    //   .then((currentToken) => {
    //     if (currentToken) {
    //       // プッシュ通知を受信し，表示できる状態
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     console.log('Error Occurred.')
    //   })
  },
  mounted() {
    console.log(this.getUserData)
  },
  methods: {
    ...mapActions('user', ['logout']),
    doLogout() {
      this.logout().then(() => {
        this.$router.push('/login')
      })
    },
    nextPage() {
      this.$router.push('/main')
    }
  }
}
</script>

<style>
.inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 15rem;
}
.center {
  text-align: center;
}
</style>
