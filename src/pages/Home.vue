<template>
  <q-page class="flex flex-center">
    {{ accountData }}

    <q-btn class="col-12" label="Buy 100 $NET shares" size="lg" outline @click="buyCloudflare" />

    <PositionsList :positions="positions" :orders="orders" />
  </q-page>
</template>

<script>
import PositionsList from 'src/components/PositionsList'
import { alpacaInstance } from 'boot/alpaca-api'

export default {
  props: ['accountData', 'positions', 'orders'],
  components: { PositionsList },
  name: 'Home',
  methods: {
    async buyCloudflare () {
      await alpacaInstance.createOrder({
        symbol: 'NET', // any valid ticker symbol
        qty: 100,
        side: 'buy',
        type: 'market',
        time_in_force: 'day'
      })
      window.location.reload()
    }
  }
};
</script>
