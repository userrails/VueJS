import Vue from 'vue'
import Vuex from 'vuex'
import * as counter from './counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    counter
  }
})
