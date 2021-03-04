<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { alpacaInstance } from 'boot/alpaca-api'

export default {
  name: 'App',
  methods: {
    async printAccount () {
      const account = await alpacaInstance.getAccount()
      console.log(account)
    }
  },
  mounted () {
    this.printAccount()
  }
};
</script>
