const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const selectedOption = state => state.app.selectedOption
const url = state => state.app.url
const token = state => state.app.token
const username = state => state.app.username
const vehiclesData = state => state.app.vehiclesData
const urlMap = state => state.app.urlMap
const kindMonitor = state => state.app.kindMonitor
const units = state => state.app.units
const lang = state => state.app.lang
const timeZone = state => state.app.timeZone

export {
  config,
  palette,
  isLoading,
  selectedOption,
  url,
  token,
  username,
  vehiclesData,
  urlMap,
  kindMonitor,
  units,
  lang,
  timeZone,
}
