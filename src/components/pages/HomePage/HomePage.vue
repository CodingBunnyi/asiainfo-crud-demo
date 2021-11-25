<template>
  <div class="container">
    <div>
      Hello {{nickyName}}
    </div>
    <div>
      <el-form ref="updateForm" :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="signup_form_container">
        <el-form-item label="New Nicky Name">
          <el-input placeholder="Your new nicky name" v-model="formLabelAlign.newNickyName"></el-input>
        </el-form-item>
        
        <el-form-item class="signup_btn">
          <el-button type="primary" @click="changeNickyName()">Change Nicky Name</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-button type="primary" @click="signout()">Signout</el-button>
    <el-button type="primary" class="delete_btn" @click="deleteAccount()">Delete account</el-button>
  </div>
</template>

<script>
import * as apiUtils from '../../../utils/apiUtils.js';
export default {
  name: 'HomePage',
  methods: {
    signout() {
      localStorage.removeItem('nickyName');
      localStorage.removeItem('id');
      this.$router.push('/')
    },
    async changeNickyName() {
      const id = localStorage.getItem('id');
      const putUpdateNickyNameResponse = await apiUtils.updateNickyName(id, this.formLabelAlign.newNickyName);
        if (putUpdateNickyNameResponse.status === 200) {
        localStorage.setItem('nickyName', this.formLabelAlign.newNickyName)
        this.nickyName = this.formLabelAlign.newNickyName;
        this.formLabelAlign.newNickyName = '';
      }
    },
    async deleteAccount() {
      const id = localStorage.getItem('id');
      const deleteAccountResponse = await apiUtils.deleteAccount(id);
        if (deleteAccountResponse.status === 200) {
          alert("Delete this account successfully!")
          this.signout()
      }
    },
  },
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        newNickyName: '',
      },
      nickyName: localStorage.getItem('nickyName')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.delete_btn {
  margin-top: 20px;
}
</style>