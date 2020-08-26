<template>
  <div class="main">
    <Split :style="{ height: panelHeight }">
      <SplitArea :size="panelSelectorSize">
        <div>
          <div class="d-flex justify--center mt-3">
            <div class="main__title">Seleccionar día</div>
          </div>

          <div class="d-flex justify--center mt-3">
            <div class="main__date">
              <v-date-picker
                v-model="selectedDate"
                :max-date="maxDate"
                is-inline
                locale="es"
              />
            </div>
          </div>

          <div class="d-flex justify--center mt-3">
            <button class="button-three" @click="consult">Consultar</button>
          </div>

          <pulse-loader
            :loading="isLoadingVehicles"
            :color="loadingColor"
          ></pulse-loader>
        </div>
      </SplitArea>

      <SplitArea :size="panelMapSize">
        <Gallery :key="counter" :directory.sync="directory" />
      </SplitArea>
    </Split>
  </div>
</template>

<script>
import Vue from 'vue'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Gallery from './Gallery'
import VCalendar from 'v-calendar'
import VueSlideoutPanel from 'vue2-slideout-panel'
import VueSplit from 'vue-split-panel'

Vue.use(VueSplit)
Vue.use(VueSlideoutPanel)

Vue.use(VCalendar)

export default {
  name: 'ea1cqp',
  components: {
    PulseLoader,
    Gallery,
  },
  watch: {
    selectedDate: function(val) {
      if (val !== undefined) {
        let year = val.getFullYear().toString()
        let month = ('0' + (val.getMonth() + 1)).slice(-2)
        let day = val.getDate().toString()
        this.directory = year + '-' + month + '-' + day
      }
    },
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      counter: 0,
      directory: '',
      maxDate: new Date(),
      selectedDate: new Date(),
      isLoading: false,
      isLoadingVehicles: false,
      loadingColor: '#2351A0',
      panelHeight: '0px',
      panelSelectorSize: 25,
      panelMapSize: 75,
      isPanelSelector: true,
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.handleResize()
    this.setInitialDate()
    this.fixPanels()
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.panelHeight = this.window.height - 0 + 'px'
      this.mapHeight = this.window.height - 0 + 'px'
      this.listHeight = this.window.height - 0 + 'px'
    },
    setInitialDate() {
      if (this.selectedDate !== undefined) {
        let year = this.selectedDate.getFullYear().toString()
        let month = ('0' + (this.selectedDate.getMonth() + 1)).slice(-2)
        let day = this.selectedDate.getDate().toString()
        this.directory = year + '-' + month + '-' + day
      }
    },
    fixPanels() {
      if (this.isPanelSelector) {
        this.panelSelectorSize = 20
        this.panelMapSize = 80
      }
    },
    consult() {
      this.counter += 1
    },
    onClosePanelSelector() {
      this.isPanelSelector = false
      this.fixPanels()
    },
    onClosePanelInfo() {
      this.isPanelInfo = false
      this.fixPanels()
    },
  },
}
</script>

<style lang="scss">
#app {
  background-color: white;
}

.main__license {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.main__list {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: transparent !important;
  overflow-y: scroll;
}

.main__list--element {
  background-color: white;
  cursor: pointer;
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid lightgray;
}

.main__list--element-selected {
  background-color: #019bcc;
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid lightgray;
}

.main__btn--img--close {
  width: 25px;
  height: 25px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  left: 0px;
  position: fixed;
}
.main__btn--img--close2 {
  width: 25px;
  height: 25px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  right: 0px;
  position: fixed;
}

.main__msgError {
  font-size: 1.2 rem;
  font-weight: bold;
  color: red;
}

.main__tabs {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main__tree {
  padding-top: 0rem;
}
.main__radio {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__title {
  font-size: 1.2rem;
  font-weight: 600;
}
.main__date {
  margin-right: 1rem;
  margin-left: 1rem;
}

body {
  background: #2c3e50;
  font-family: 'Open Sans', sans-serif;
}

h1,
button {
  color: #fff;
  text-align: center;
  padding: 20px;
}

p {
  color: #fff;
  text-align: center;
  padding-top: 500px;
  font-size: 10px;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #2ecc71;
}

.main {
  width: 100%;
}

.sub-main {
  width: 100%;
  margin: 22px;
  float: left;
}

.button-one,
.button-two,
.button-three {
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  margin: 0 0 0 0px;
}

/*Button Three*/
.button-three {
  position: relative;
  background-color: #f39c12;
  border: none;
  padding: 10px;
  width: 150px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
}

.button-three:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #97b1bf;
  color: #000;
}

.button-three:after {
  content: '';
  background: #f1c40f;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.button-three:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>
