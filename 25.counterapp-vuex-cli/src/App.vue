<template>
  <div id="app">
    <p>Clicked: {{counter}} times</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
