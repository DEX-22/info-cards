<template>
  <div class="card">
    <div class="card-content">
      <input
        type="date"
        @input="showDate"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showDate(event) {
      const selectedDate = event.target.value
      alert('Fecha seleccionada: ' + selectedDate)
    }
  }
}
</script>
