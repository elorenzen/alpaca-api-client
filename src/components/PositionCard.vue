<template>
    <div>
      <q-item>
        <q-item-section avatar top>
          <q-avatar color="secondary" text-color="white">{{ position.symbol }}</q-avatar>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">
              ${{ position.market_value.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
          </q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Today's P/L($): {{ position.unrealized_intraday_pl }}</span>
            <span class="text-grey-8"> ({{ position.unrealized_intraday_plpc }}%)</span>
          </q-item-label>
          <q-item-label caption lines="1">
            Total P/L($): {{ position.unrealized_pl }}
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <q-item-label caption>{{ position.qty.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} shares</q-item-label>
          <div class="q-pa-sm q-gutter-xs">
            <q-btn class="gt-xs" outline size="sm" label="buy" color="positive" />
            <q-btn class="gt-xs" outline size="sm" label="sell" color="negative" />
          </div>
        </q-item-section>
      </q-item>

      <div class="q-px-lg">
        <q-list padding class="row rounded-borders text-black">
            <q-expansion-item
                class="col"
                dense
                dense-toggle
                expand-separator
                icon="fas fa-chart-line"
                label="Technical indicators"
            >
                RSI: {{ rsiData }}
            </q-expansion-item>

            <q-expansion-item
                class="col"
                dense
                dense-toggle
                expand-separator
                icon="fas fa-receipt"
                label="Order history"
            >
                {{ orders }}
            </q-expansion-item>
        </q-list>
      </div>

      <q-separator spaced />
    </div>
</template>

<script>
import { alpacaInstance } from 'boot/alpaca-api'
import axios from 'axios'

export default {
  props: ['position', 'orders'],
  data () {
    return {
      assetData: null,
      rsiData: null
    }
  },
  methods: {
    async getAssetData () {
      this.assetData = await alpacaInstance.getAsset(this.position.symbol)
      console.log('assetData: ', this.assetData)
    },
    async getRSI () {
      await axios.get(
        `https://www.alphavantage.co/query?function=RSI&symbol=${this.position.symbol}&interval=15min&time_period=5&series_type=open&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
      ).then((response) => {
        console.log(response.data['Technical Analysis: RSI'])
        this.rsiData = response.data['Technical Analysis: RSI']
      })
    }
  },
  mounted () {
    console.log(this.position)

    this.getAssetData()
    this.getRSI()
  }
}
</script>

<style>

</style>
