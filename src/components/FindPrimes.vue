<template>
  <div class="find-primes">
    <input type="number" v-model.number="inputNumber" placeholder="Ingrese un número" />
    <button @click="findPrimes">Buscar números primos</button>
    <span v-if="primes.length > 0">
      <template v-for="(prime, index) in primes" >
        <span v-if="prime === inputNumber" :key="index">
          {{ prime }} (Ingresado)
        </span>
        <span v-else :key="index">
          {{ prime }}
        </span>
        <span v-if="index < primes.length - 1">, </span>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumber: null,
      primes: [],
    };
  },
  methods: {
    isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    },
    findPrimes() {
      this.primes = [];
      let lowerCount = 0;
      let higherCount = 0;
      let lowerPrime = this.inputNumber - 1;
      let higherPrime = this.inputNumber + 1;

      if (this.isPrime(this.inputNumber)) {
        this.primes.push(this.inputNumber);
      }

      while (lowerCount < 2 || higherCount < 2) {
        if (lowerCount < 2 && this.isPrime(lowerPrime)) {
          this.primes.push(lowerPrime);
          lowerCount++;
        }
        if (higherCount < 2 && this.isPrime(higherPrime)) {
          this.primes.push(higherPrime);
          higherCount++;
        }
        lowerPrime--;
        higherPrime++;
      }

      this.primes.sort((a, b) => a - b);
    },
  },
};
</script>

<style scoped>
.find-primes {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
