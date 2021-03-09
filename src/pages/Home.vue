<template>
  <q-page class="flex flex-center">
    {{ accountData }}
    {{ orders }}
    <PositionsList :positions="positions" />
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
