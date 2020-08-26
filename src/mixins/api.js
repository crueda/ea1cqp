import axios from 'axios'

export const apiMixin = {
  data() {
    return {}
  },
  methods: {
    getVehiclesData(url, token) {
      // const apiURL = url + '/vehicles'
      const apiURL = 'https://apis.kyroslbs.com/view/vehicles'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.get(apiURL, {}, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200 || response.status === 202) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    getTree(url, token) {
      // const apiURL = url + '/tree'
      // const apiURL = 'http://localhost:3007/geo/tree'      
      debugger
      const apiURL = 'https://apis.kyroslbs.com/view/tree'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.get(apiURL, {}, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    getUserHistory (url, token, timestamp) {
      // const apiURL = url + '/user/history'
      const apiURL = 'https://apis.kyroslbs.com/report/user/history'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.post(apiURL, {
          'timestamp': timestamp,
        }, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((response) => {
          console.log(response)
          reject(new Error('server-error'))
        }, (response) => {})
      })
    },
    getTracking1(url, token, vehicles) {
      // const apiURL = url + '/tracking/vehicle'
      const apiURL = 'https://apis.kyroslbs.com/view/tracking1/vehicles'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.post(apiURL, {
          'vehicles': vehicles,
        }, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    getTracking(url, token, vehicle, timestampInit, timestampEnd) {
      const apiURL = 'https://apis.kyroslbs.com/view/tracking/vehicle'
      // const apiURL = url + '/tracking/vehicle'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.post(apiURL, {
          'vehicle': vehicle,
          'timestamp_init': timestampInit,
          'timestamp_end': timestampEnd,
        }, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    getTrackingArchive(url, token, vehicle, timestampInit, timestampEnd) {
      const apiURL = 'https://apis.kyroslbs.com/history/tracking'
      // const apiURL = url + '/tracking/vehicle'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.get(apiURL, {}, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    getLastJourney(url, token, vehicle) {
      // const apiURL = url + '/lastjourney/vehicle'
      const apiURL = 'https://apis.kyroslbs.com/view/lastjourney/vehicle'
      // const apiURL = 'http://localhost:3003/view/lastjourney/vehicle'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.post(apiURL, {
          'vehicle': vehicle,
        }, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
    sendShareHistoricLink (token, url, viewUrl, email, language, deviceId, vehicleLicense, timestampInit, timestampEnd) {
      const apiURL = 'https://apis.kyroslbs.com/view/shareHistoric'
      // const apiURL = url + '/follow'
      return new Promise(function (resolve, reject) {
        axios.defaults.headers.common.Authorization = 'bearer ' + token
        axios.post(apiURL, { 'url': viewUrl, 'to': email, 'language': language, 'device_id': deviceId, 'vehicle_license': vehicleLicense, 'init_timestamp': timestampInit, 'end_timestamp': timestampEnd }, { timeout: 20000 }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },    
    getAddress(lat, lon) {
      const apiURL = 'https://nominatim.openstreetmap.org/reverse'
      return new Promise(function (resolve, reject) {
        axios.get(apiURL, {
          params: {
            format: 'jsonv2',
            lat,
            lon,
          },
        }, {
          timeout: 20000,
        }).then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            reject(new Error('api-error'))
          }
        }).catch((error) => {
          console.log(error)
          reject(new Error('server-error'))
        })
      })
    },
  },
}
