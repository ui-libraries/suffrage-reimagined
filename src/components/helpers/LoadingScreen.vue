<template>
  <span v-once :title="isLoading"></span>
</template>

<script>
  import spinner from './../../assets/scrapbook-extras/loader.svg'
  import wordmark from './../../assets/scrapbook-extras/wordmark-black-background.jpg'
  import {
    pleaseWait
  } from 'please-wait'
  import 'please-wait/build/please-wait.css'

  export default {
    props: ['isLoading'],

    data() {
      return {
        spinner: spinner,
        wordmark: wordmark
      }
    },

    watch: {
      isLoading: {
        handler(isLoading) {
          if (isLoading) {
            this.open()
          } else {
            this.close()
          }
        },
        immediate: true,
      }
    },
    methods: {
      open() {
        if (!this.pleaseWaitInstance) {
          this.pleaseWaitInstance = pleaseWait({
            logo: this.wordmark,
            backgroundColor: 'black',
            loadingHtml: '<p class="load-message">Womens Suffrage in Iowa Scrapbook</p><div class="load-wrapper"><div class="load-text">LOADING</div><div class="load-content"></div></div>'
            // loadingHtml: '<p class="loading-message">Womens Suffrage in Iowa Scrapbook</p><div class="sk-chase sk-center"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div>'
            // loadingHtml: '<div class="sk-circle"> <div class="sk-circle1 sk-child" > </div> <div class="sk-circle2 sk-child"> </div> <div class="sk-circle3 sk-child"> </div> <div class="sk-circle4 sk-child"> </div> <div class="sk-circle5 sk-child"> </div> <div class="sk-circle6 sk-child"> </div> <div class="sk-circle7 sk-child"> </div> <div class="sk-circle8 sk-child"> </div> <div class="sk-circle9 sk-child"> </div> <div class="sk-circle10 sk-child"> </div> <div class="sk-circle11 sk-child"> </div> <div class="sk-circle12 sk-child"> </div> </div>'
          })
        }
      },
      close() {
        if (this.pleaseWaitInstance != null) {
          this.pleaseWaitInstance.finish()
          this.pleaseWaitInstance = null
        }
      }
    }
  }
</script>

<style>
.pg-loading-logo {
  padding: 0 20px !important;
}
  .load-message {
    color: white;
    margin-top: -50px;
    margin-bottom: 50px;
    font-size: 1.2em;
    font-family: sans-serif;
    font-weight: bold;
  }

@keyframes loader {
      0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .load-wrapper {
      margin-top: 120px;
      position: absolute;
      top: 60%;
      left: 50%;
    }

        .load-text {
      display: block;
      position: relative;
      color: white;
      width: 100px;
      height: 15px;
      margin: -7px 0 0 -45px;
      text-align: center;
      font-family: 'PT Sans Narrow', sans-serif;
      font-size: 20px;
    }

    .load-content {
      display: block;
      position: relative;
      width: 170px;
      height: 170px;
      margin: -85px 0 0 -85px;
      border: 3px solid blue;
      
    }

    .load-content {
      border: 3px solid transparent;
      border-top-color: #FFCD00;
      border-bottom-color: #FFCD00;
      border-radius: 50%;
      -webkit-animation: loader 2s linear infinite;
      -moz-animation: loader 2s linear infinite;
      -o-animation: loader 2s linear infinite;
      animation: loader 2.5s linear infinite;
    }
</style>