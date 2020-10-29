<template>
  <div class="scrapbook-body-container" role="main">
    <!-- <div class="binder-rings"></div> -->
    <img v-if="!isMobile()" :src="BinderRings" class="binder-rings" />

    <router-view />
  </div>
</template>

<script>
  import BinderRings from '../../assets/scrapbook-extras/binder-rings.png'

  export default {
    data() {
      return {
        BinderRings: BinderRings,
        window: {
          width: 0,
          height: 0,
        }
      }
    },

    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      isMobile() {
        return this.window.width < 1200 ? true : false
      },

      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
    }
  }
</script>

<style scoped>
  .binder-rings {
    position: absolute;
    top: 0;
    left: -41px;
    z-index: 1;
    height: 100%;
    width: 100px;
  }

  .scrapbook-body-container {
    /* min-height: 48rem; */
    min-height: 75vh;
    background-color: ghostwhite;
    position: relative;
    /* background-image: url('https://i.imgur.com/mNBhyUX.jpg'); */
    background-image: url("../../assets/scrapbook-extras/background.jpg");
    background-size: cover;
    padding: 2em 4em;
  }

  @media only screen and (max-width: 450px) {
    .scrapbook-body-container {
      padding: 2em 2em;
    }
  }

  .nav-arrows {
    display: block;
    width: 100%;
    height: 100px;
  }

  .go-back-arrow {
    position: absolute;
    left: 35px;
  }

  .go-forward-arrow {
    position: absolute;
    left: 94%;
  }

  .go-back-arrow,
  .go-forward-arrow {
    height: 6vh;
    top: 92%;
    border-radius: 100%;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
  }

  .go-back-arrow:hover,
  .go-forward-arrow:hover {
    background-color: rgba(0, 0, 0, 0.164);
  }
</style>