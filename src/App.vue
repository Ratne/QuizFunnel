<template>
<div class="container">

  <register-form v-if="registerShow"/>
  <current-step-view v-else />

</div>
</template>

<script>

import CurrentStepView from "./components/CurrentStepView";
import RegisterForm from "./components/RegisterForm";
export default {
  name: 'App',
  components: {RegisterForm, CurrentStepView},
  computed: {
    registerShow(){
      return this.$store.getters.getRegisterShow
    }
  }
}
</script>

<style lang="scss">

</style>
