<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        $ {{ bitcoinPrice }} USD
      </p>
      <p class="subtitle">
        Precio del Bitcoin
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bitcoinPrice: ''
    }
  },
  async mounted() {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    this.bitcoinPrice = response.data.bitcoin.usd.toFixed(2)
  }
}
</script>
