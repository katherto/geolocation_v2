<template>
  <div>
    <input type="button" 
      :value="buttonText" 
      @click="setLocation()"><br />
    <input type="button" value="Calculate Distance"
       v-if="this.$store.getters.getUserLocation.pos.lat"
      @click="calcDistance()">
     <!-- The idea behind this button is to separate the calculation from 
          getting position so enough time lapses and an accurate calculation 
          can be made (this also will support later function for selecting
          the planet you want to calculate distance from 
          
          Consider refocusing this component into a group of button components or
          separate the two into their own components -->
  </div>
</template>

<script>
export default {
  name: 'LocationButton',
  computed: {
    buttonText() {
      return this.$store.getters.getButtonText;
    }
  },
  methods: {
    setLocation() {
      this.$store.dispatch("setUserLocation");
    },
    calcDistance() {
      this.$store.dispatch("calculateDistance");
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 0.25em;
  width: 11em;
}
</style>