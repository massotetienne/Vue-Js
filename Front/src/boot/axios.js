import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default ({ Vue }) => {
  axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
  // axios.defaults.baseURL = 'https://arinfo.tk/api'
  axios.defaults.withCredentials = true
  Vue.prototype.$axios = axios
}
