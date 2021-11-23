<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="login_form_container">
    <el-form-item label="Username">
      <el-input placeholder="Your username" v-model="formLabelAlign.username"></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input placeholder="Your password" v-model="formLabelAlign.password" show-password></el-input>
    </el-form-item>
    
    <el-form-item class="login_btn">
      <el-button type="primary" @click="login()">Login</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import * as apiUtils from '../../../../utils/apiUtils.js';
export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    async login() {
      const postLoginResponse = await apiUtils.login( this.formLabelAlign.username, this.formLabelAlign.password );
        if (postLoginResponse.status === 200) {
        this.$router.push('home')
      }
    }
  }
}
</script>

<style scoped>
.login_form_container {
  padding: 1.5rem 2rem;
}
.login_btn {
  padding-top: 1rem;
}
</style>