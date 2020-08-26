import { EventEnum } from '../util/event-enum.js'
import { EventEnumEn } from '../util/event-enum-en.js'

export const utilMixin = {
  data () {
    return {
    }
  },
  computed: {
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    generateId: function () {
      return parseInt(Math.random() * 10000000)
    },
    emailIsValid: function (email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    getEventIcon: function (eventType) {
      const URL_BASE = ''
      const event = EventEnum[eventType]
      if (event !== undefined) {
        return URL_BASE + EventEnum.properties[event].icon
      } else {
        return URL_BASE + 'info.svg'
      }
    }, 
    getEventUrlIcon: function (eventType) {
      const URL_BASE = 'https://images.kyroslbs.com/kyrosview2/img/events/'
      const eventImg = this.getEventIcon(eventType)
      return URL_BASE + eventImg
    },    
    getEventUrlIconPng: function (eventType) {
      const URL_BASE = 'https://images.kyroslbs.com/kyrosview2/img/events/png/'
      const eventImg = this.getEventIcon(eventType)
      return URL_BASE + eventImg + '.png'
    },    
    getEventDescription: function (eventType, lang = 'es') {
      if (lang === 'en') {
        const event = EventEnumEn[eventType]
        if (event !== undefined) {
          return EventEnumEn.properties[event].description
        } else {
          return ''
        }
      } else {
        const event = EventEnum[eventType]
        if (event !== undefined) {
          return EventEnum.properties[event].description
        } else {
          return ''
        }
      }
    },
    getZoomLevel (maxLat, minLat, maxLon, minLon) {
      var WORLD_DIM = { height: 256, width: 256 }
      var ZOOM_MAX = 21
      var sizeStatic = [1200, 800]

      function latRad (lat) {
        var sin = Math.sin(lat * Math.PI / 180)
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2
      }

      function zoom (mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2)
      }

      var latFraction = (latRad(maxLat) - latRad(minLat)) / Math.PI
      var lngDiff = maxLon - minLon
      var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360
      var latZoom = zoom(sizeStatic[1], WORLD_DIM.height, latFraction)
      var lngZoom = zoom(sizeStatic[0], WORLD_DIM.width, lngFraction)

      return Math.min(latZoom, lngZoom, ZOOM_MAX)
    },
    compareInitTimestamp: function (a, b) {
      let comparison = 0
      if (a.initTimestamp < b.initTimestamp) {
        comparison = -1
      } else if (a.initTimestamp > b.initTimestamp) {
        comparison = 1
      }
      return comparison
    },
    compareId: function (a, b) {
      let comparison = 0
      if (a.id < b.id) {
        comparison = -1
      } else if (a.id > b.id) {
        comparison = 1
      }
      return comparison
    },
    compare: function (a, b) {
      if (a.distance === undefined) {
        a.distance = 0
      }
      if (b.distance === undefined) {
        b.distance = 0
      }
      if (a.consumption === undefined) {
        a.consumption = 0
      }
      if (b.consumption === undefined) {
        b.consumption = 0
      }
      let comparison = 0
      if (a.distance > b.distance) {
        comparison = -1
      } else if (a.distance < b.distance) {
        comparison = 1
      }
      return comparison
    },
    toTime (seconds) {
      var timeString = ''
      try {
        var date = new Date(null)
        date.setSeconds(seconds)
        timeString = date.toISOString().substr(11, 8)
      } catch (error) {
        timeString = seconds
      }
      return timeString
    },
    getUrlParameter (name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
      var results = regex.exec(window.location.href)
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
    },
    arrayToObject (array, keyField) {
      array.reduce((obj, item) => {
        obj[item[keyField]] = item
        return obj
      }, {})
    }
  }
}
