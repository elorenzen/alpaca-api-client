<template>
  <div id="q-app">
    <router-view :accountData="data"  />
  </div>
</template>
<script>
import { alpacaInstance } from 'boot/alpaca-api'

export default {
  name: 'App',
  data () {
    return { data: null }
  },
  methods: {
    async printAccount () {
      this.data = await alpacaInstance.getAccount()
    }
  },
  mounted () {
    this.printAccount()
  }
};
</script>
