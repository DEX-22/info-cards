<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ temperature }} °C
      </p>
      <i class="fas fa-sun fa-2x"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      temperature: ''
    }
  },
  async mounted() {
    const apiKey = 'f56d129950ba867386a31776bc14e603'
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=${apiKey}&units=metric`)
    this.temperature = response.data.main.temp.toFixed(1)
  }
}
</script>
