<template>
  <div>
    <iframe width="100%" 
    :height="tableHeight"
    :src="urlFrame"></iframe>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'gallery',
  props: {
    directory: String,
  },
  computed: {
    urlFrame() {
      if (this.directory === '') {
        let today = new Date()
        let year = today.getFullYear().toString()
        let month = ('0' + (today.getMonth() + 1)).slice(-2)
        let day = today.getDate().toString()
        return this.urlBase + year + '-' + month + '-' + day
      }
      return 'http://ea1cqp.ddns.net/fotos/' + this.directory
    },
  },
  data() {
    return {
      tableHeight: '1500px',
      urlBase: 'http://ea1cqp.ddns.net/fotos/',
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  mounted() {
    let today = new Date()
    let year = today.getFullYear().toString()
    let month = ('0' + (today.getMonth() + 1)).slice(-2)
    let day = today.getDate().toString()
    this.urlBase = this.urlBase + year + '-' + month + '-' + day
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      // this.tableHeight = ((this.window.height) - 0) + 'px'
    },
  },
}
</script>
