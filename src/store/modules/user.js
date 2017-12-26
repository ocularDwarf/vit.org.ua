import axios from 'axios'
const state = {
  user: null,
  loading: false,
  error: null,
  success: null
}

const mutations = {
  setLoading(state, payload){
    state.loading = payload
  },
  setError(state, payload){
    state.error = payload
  },
  setSuccess(state, payload){
    state.success = payload
  },
  clearError(state) {
    state.error = null
  }
}

const actions = {
  auth ({ commit }, { name, email, message }) {
    commit('setLoading', true)
    commit('clearError')
    axios.post('/api/form', {
      name, email, message
    }).then((res) => {
      commit('setLoading', false)
      commit('setSuccess', res)
      console.log(res.data)
    }).catch((err) => {
      commit('setLoading', false)
      commit('setError', err)
      console.log(err)
    })
  }
}

const getters = {
  loading(state) {
    return state.loading
  },
  success(state){
    return state.success
  },
  error(state){
    return state.error
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
