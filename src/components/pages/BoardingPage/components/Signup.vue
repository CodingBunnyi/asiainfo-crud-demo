<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="signup_form_container">
    <el-form-item label="Username">
      <el-input placeholder="Your username" v-model="formLabelAlign.username"></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input placeholder="Your password" v-model="formLabelAlign.password" show-password></el-input>
    </el-form-item>

    <el-form-item label="Nicky Name">
      <el-input placeholder="Your nicky name" v-model="formLabelAlign.nickyName"></el-input>
    </el-form-item>
    
    <el-form-item class="signup_btn">
      <el-button type="primary" @click="signup()">Signup</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import * as apiUtils from '../../../../utils/apiUtils.js';

export default {
  name: 'Signup',
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        username: '',
        password: '',
        nickyName: '', 
      }
    };
  },
  methods: {
    async signup() {
      const postSignupResponse = await apiUtils.signup(this.formLabelAlign.username, this.formLabelAlign.password, this.formLabelAlign.nickyName);
        if (postSignupResponse.status === 200) {
        alert("Signup successfully!")
        this.$emit('toLogin', 'login')
      }
    },
  },
}
</script>

<style scoped>
.signup_form_container {
  padding: 1.5rem 2rem;
}
.signup_btn {
  padding-top: 1rem;
}
</style>