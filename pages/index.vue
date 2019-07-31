<template>
  <div>
    <div class="inner">
      <h4 class="center">User Name : {{ getUserData.displayName }}</h4>
      <h4 class="center">Mail Address : {{ getUserData.email }}</h4>
      <div class="center" style="margin-top: 30px;">
        <b-button variant="outline-primary" @click="doLogout">
          Logout
        </b-button>
        <b-button variant="outline-primary" @click="sendMessage">
          Messaging
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      test: '',
      token: ''
    }
  },
  computed: {
    ...mapGetters('user', ['getUserData'])
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
    },
    sendMessage() {
      console.log(this.token)
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer AAAAU_qGpJ8:APA91bHLud3x75i5qaK4F7iSzVcEdy1TqkdH01_o1YtSbisq0BWNKZsQ2dAu6zPwC46MoMsP2jaASnAff-2LFB1ROthhwe2aEw7Tzt5cp-WfQCoR9_jr5nRDveZnuwGm7V5IB3ebf--2'
        }
      }
      const sendData = {
        message: {
          token: this.token,
          notification: {
            title: 'Formで入力したtitle',
            body: 'Formで入力したbody'
          }
        }
      }
      axios.post(
        'https://fcm.googleapis.com/v1/pwa-practice-93929/messages:send',
        sendData,
        headers
      )
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
