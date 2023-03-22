<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ joke }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      joke: ''
    }
  },
  async mounted() {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    })
    this.joke = response.data.joke
  }
}
</script>
