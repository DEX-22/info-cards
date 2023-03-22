<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        S/ {{ dollarPrice }} PEN
      </p>
      <p class="subtitle">
        Precio del dólar en Perú
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dollarPrice: ''
    }
  },
  async mounted() {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/PEN')
    this.dollarPrice = (1 / response.data.rates.USD).toFixed(2)
  }
}
</script>
