import { createStore, createLogger } from 'vuex'

interface State {
  userName: string,
  appName: string,
  count: number
}

export default createStore({
  state(): State {
    return {
      userName: 'haoyong',
      appName: 'CMS',
      count: 0
    }
  },
  mutations: {
    addCount (state: State) {
      state.count++
    }
  }
})