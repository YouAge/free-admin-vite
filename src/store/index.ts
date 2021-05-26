import { createStore } from 'vuex'
import getters from './getters'
import apps from './modules/apps'

export default createStore({
  getters,
  modules: {
    apps,
  },
})
