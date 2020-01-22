<template>
    <span :title="isLoading"></span>
</template>

<script>
import spinner from './../../assets/scrapbook-extras/loader.svg'
import {pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'
export default {
    props: ['isLoading'],
data () {
    return {
      pleaseWaitInstance: null
    }
  },
  mounted () {
    this.updatePleaseWait()
  },
  beforeUpdate () {
    this.updatePleaseWait()
  },
  methods: {
    updatePleaseWait () {
      if (this.isLoading && this.pleaseWaitInstance == null) {
        this.pleaseWaitInstance = pleaseWait({
          logo: 'https://pathgather.github.io/please-wait/assets/images/pathgather.png',
          backgroundColor: '#FFCD00',
          loadingHtml: "<div><p class='header'>Womens Suffrage in Iowa Scrapbook</p><p class='loading-message'>Test</p></div>"
        })
      }
      if (!this.isLoading && this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish()
      }
    }
  }
}
</script>

<style scoped>
.loading-message {
    color: white;
}

.header {
    font-size: 100px;
    color: white;
}
</style>