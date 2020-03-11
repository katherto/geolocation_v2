<template>
  <div>
    <p v-if="distanceFrom">You are {{ distanceFrom }} miles from Jupiter</p>
  </div>
</template>

<script>
export default {
  name: 'DistanceComponent',
  computed: {
    distanceFrom() {
      return this.$store.getters.getDistance;
    }
  }
}
</script>

<style scoped>

</style>