<template>
  <span :title="isLoading"></span>
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
            loadingHtml: '<p class="loading-message">Womens Suffrage in Iowa Scrapbook</p><div class="sk-chase sk-center"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div>'
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
  .loading-message {
    color: white;
    margin-top: -50px;
    margin-bottom: 50px;
    font-size: 16px;
    font-family: 'Gotham Bold';
  }

.sk-center {
  margin: auto;
}
.sk-chase {
  width: 80px;
  height: 80px;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>