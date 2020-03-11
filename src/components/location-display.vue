<template>
  <div>
    <h2 v-if="currentLoc.pos.lat">Your Current Location</h2>
    <p v-if="currentLoc.pos.lat">Latitude: {{ currentLoc.pos.lat }}</p>
    <p v-if="currentLoc.pos.lat">Longitude: {{ currentLoc.pos.lng }}</p>
  </div>
</template>

<script>
export default {
  name: 'LocationDisplay',
  computed: {
    currentLoc() {
      return this.$store.getters.getUserLocation;
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 0;
}

p:first-of-type {
  margin-bottom: 0;
}
</style>