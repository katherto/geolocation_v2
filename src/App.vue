<template>
  <div id="app">
    <LocationButton />
    <LocationDisplay />
    <DistanceComponent />
  </div>
</template>

<script>
import LocationButton from './components/location-button.vue'
import LocationDisplay from './components/location-display.vue'
import DistanceComponent from './components/distance-component.vue'

export default {
  name: 'App',
  components: {
    LocationButton,
    LocationDisplay,
    DistanceComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
