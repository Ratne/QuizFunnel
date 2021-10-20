import { createStore } from 'vuex'
import steps from "./steps";



export default createStore({
  modules: {
    steps: steps,
  }
})