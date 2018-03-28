import actions from './actions'
import { mutations } from './mutation'

const state = {
  count: 0
}

const getters = {
  counter: state => state.count
}

export {
  actions,
  getters,
  mutations,
  state
}
