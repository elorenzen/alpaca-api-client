<template>
  <q-page class="flex flex-center">
    {{ accountData }}
    <PositionsList :positions="positions" :orders="orders" />
  </q-page>
</template>

<script>
import PositionsList from 'src/components/PositionsList'

export default {
  props: ['accountData', 'positions', 'orders'],
  components: { PositionsList },
  name: 'Home',
};
</script>
