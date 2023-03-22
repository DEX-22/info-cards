<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third">
          <RandomNumberCard />
        </div>
        <div class="column is-one-third">
          <WeatherCard />
        </div>
        <div class="column is-one-third">
          <DollarPriceCard />
        </div>
        <div class="column is-one-third">
          <JokeCard />
        </div>
        <div class="column is-one-third">
          <BitcoinPriceCard />
        </div>
        <div class="column is-one-third">
          <CalendarCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RandomNumberCard from './components/RandomNumberCard.vue'
import WeatherCard from './components/WeatherCard.vue'
import DollarPriceCard from './components/DollarPriceCard.vue'
import JokeCard from './components/JokeCard.vue'
import BitcoinPriceCard from './components/BitcoinPriceCard.vue'
import CalendarCard from './components/CalendarCard.vue'

export default {
  components: {
    RandomNumberCard,
    WeatherCard,
    DollarPriceCard,
    JokeCard,
    BitcoinPriceCard,
    CalendarCard
  }
}
</script>
