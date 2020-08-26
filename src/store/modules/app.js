import axios from 'axios'

const state = {
  sidebar: {
    opened: false,
  },
  config: {
    palette: {
      primary: '#4ae387',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd',
    },
  },
  loading: false,
  loggedIn: false,
  isLoading: false,
  selectedOption: '',
  url: 'http://localhost:3003/view2',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjA0OTY0OTgwOTMsImlzcyI6Imt5cm9zdmlldyIsInN1YiI6ImNydWVkYSIsImtpbmRfbW9uaXRvciI6Mn0.Pkpfg-65KwjRHZGqL3WxHc9khPIg_esjUfWa2v8sy7s',
  username: 'crueda',
  role: '',
  usersData: [],
  vehiclesData: {},
  selectedTimestampInit: new Date(new Date().setDate(new Date().getDate() - 1)),
  selectedTimestampEnd: new Date(),
  jsonFields: {},
  jsonData: [],
  urlMap: 'https://web.kyroslbs.com/map',
  kindMonitor: 2,
  lang: 'es',
  units: 'meters',
  timeZone: 'Europe/Madrid',
}

const mutations = {
  setLoading (state, data) {
    state.loading = data
  },
  setLoggedIn (state, data) {
    state.loggedIn = data
  },
  setIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setSelectedOption (state, data) {
    state.selectedOption = data
  },
  setUrl (state, data) {
    state.url = data
  },
  setUsername (state, data) {
    state.username = data
  },
  setToken (state, data) {
    state.token = data
  },
  setVehiclesData (state, data) {
    state.vehiclesData = data
  },
  setUrlMap (state, data) {
    state.urlMap = data
  },
  setKindMonitor (state, data) {
    state.kindMonitor = data
  },
  setUnits (state, data) {
    state.units = data
  },
  setLang (state, data) {
    state.lang = data
  },
  setTimeZone (state, data) {
    state.timeZone = data
  },
}

const actions = {
  loadVehiclesData: async function (context, data) {
    const apiURL = data.url + '/vehicles'
    axios.defaults.headers.common.Authorization = 'bearer ' + data.token
    axios.get(apiURL, { }, { timeout: 20000 }).then((response) => {
      var vd = response.data.data
      context.commit('setVehiclesData', vd)      
      return true
    }, (err) => {
      console.error(err)
      return false
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
