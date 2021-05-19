<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-grey-6">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view :accountData="accountData" :positions="positions" :orders="orders" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ['accountData', 'positions', 'orders'],
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
