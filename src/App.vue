<template>
  <div id="q-app">
    <router-view :accountData="accountData" :positions="positions" :orders="orders" />
  </div>
</template>
<script>
import { alpacaInstance } from 'boot/alpaca-api'

export default {
  name: 'App',
  data () {
    return {
      accountData: null,
      positions: null,
      orders: null
    }
  },
  methods: {
    async printAccount () {
      this.accountData = await alpacaInstance.getAccount()
    },
    async printPositions () {
      this.positions = await alpacaInstance.getPositions()
    },
    async printOrders () {
      this.orders = await alpacaInstance.getOrders({
        status: 'all'
      })
    }
  },
  mounted () {
    this.printAccount()
    this.printPositions()
    this.printOrders()
  }
};
</script>
