import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  jupiter:  {
    loc: 'Kansas State Capitol Visitor Center',
    pos: {
      lat: 39.048257,
      lng: -95.677630
    }
  },
  userLoc: {
    pos: {
      lat: null,
      lng: null
    }
  },
  distance: null,
  btnText: 'Get My Location'
};

const mutations = {
  CHANGE_BTN_TEXT(state) {
    state.btnText = "Update My Location";
  },
  CHANGE_DISTANCE(state) {
    navigator.geolocation.getCurrentPosition(pos => {
      state.userLoc.pos.lat = pos.coords.latitude.toFixed(6);
      state.userLoc.pos.lng = pos.coords.longitude.toFixed(6);
    });
  },
  CALCULATE_DISTANCE(state) {
    var R = 3958.8; // Radius of the Earth in miles, 6371.0710 Radius of the Earth in Kilometers
    var rlat1 = state.jupiter.pos.lat * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = state.userLoc.pos.lat * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (state.userLoc.pos.lng - state.jupiter.pos.lng) * (Math.PI / 180); // Radian difference (longitudes)

    // Distance calculation, use radius of earth in Km to change units
    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));

    state.distance = d.toFixed(2);
  }
};

const actions = {
  setUserLocation(context) {
    context.commit("CHANGE_DISTANCE");
    context.commit("CHANGE_BTN_TEXT");
  },
  calculateDistance(context) {
    context.commit("CALCULATE_DISTANCE");
  }
};

const getters = {
  getDistance(state) {
    return state.distance;
  },
  getButtonText(state) {
    return state.btnText;
  },
  getUserLocation(state) {
    return state.userLoc;
  },
  getLocationName(state) {
    return state.jupiter.loc;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});