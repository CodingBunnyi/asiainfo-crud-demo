<template>
  <div class="bg">
    <div class ="container">
      <div class="options">
        <Options :activatedName="activatedName" @clicked="updateActivated" :optionType="login" />
        <Options :activatedName="activatedName" @clicked="updateActivated" :optionType="signup" /> 
      </div>

      <div class="content">
        <Login v-if="activatedName === 'login'"/>
        <Signup v-if="activatedName === 'signup'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Options from './components/Options.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export default {
  name: 'BoardingPage',
  components: {
    Options,
    Login,
    Signup
  },

  data() {
    return {
      login: 'login',
      signup: 'signup',
      activatedName: 'login',
    }
  },
  methods: {
    updateActivated(value) {
        this.activatedName = value;
    }
  },
}
</script>

<style scoped>
.bg {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
}
.container {
    width: 25rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 35%);
    max-height: 90vh;
    max-width: 90vw;
    margin-top: 90px;
}
.options {
  display: flex;
}
</style>