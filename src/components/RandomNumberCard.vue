<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ randomNumber }}
      </p>
      <button class="button is-primary" @click="generateRandomNumber">Generar número</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: ''
    }
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 101)
    }
  }
}
</script>
