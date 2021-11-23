<template>
  <button 
    :class="{
      'option option_login': optionType === 'login',
      'option option_signup': optionType === 'signup',
      'option option_login activated': optionType === 'login' && activatedName === 'login',
      'option option_signup activated': optionType === 'signup' && activatedName === 'signup',

    }"

    v-on:click="handleUpdateActivated()"
  >
    {{optionType.toUpperCase()}}
  </button>
</template>

<script>
export default {
  name: 'Options',
  props: ['optionType', 'activatedName'],
  methods: {
    handleUpdateActivated() {
      this.$emit('clicked', this.$props.optionType)
    }
  },
}
</script>

<style scoped>
.option {
  margin: 0;
  border: 0;
  cursor: pointer;
  background-color:#fff;
  color: #409EFF;
  padding: 1rem 0;
}
.option_login {
  width: 50%;
  box-sizing: border-box;
  border-top-left-radius: 5px;
}
.option_signup {
 flex: 1;
  border-top-right-radius: 5px;
}
.activated {
  background-color: #409EFF;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>