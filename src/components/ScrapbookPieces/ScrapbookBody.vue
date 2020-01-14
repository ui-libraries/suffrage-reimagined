<template>
<div class="scrapbook-body-container" role="main">
    <router-view />
    <!-- <div class="nav-arrows">
        <img class="go-back-arrow" src="../../assets/arrow-left.png" @click="prevTab()">
        <img class="go-forward-arrow" src="../../assets/arrow-right.png" @click="nextTab()">
    </div> -->
</div>
</template>

<script>
import { routeNames } from '../../router/index'

export default {
    data () {
        return {
            routes: routeNames,
        }
    },

    methods: {
      // prevTab: goToPrevRoute,
      // nextTab: goToNextRoute,
      prevTab() {
        let index = this.routes.indexOf(this.$route.name);
        if (this.routes[index-1]) {
            this.$router.push({name: this.routes[index-1]});
        }
      },
      nextTab() {
        let index = this.routes.indexOf(this.$route.name);
        if (this.routes[index+1]) {
            this.$router.push({name: this.routes[index+1]});
        }
      }
    }
}
</script>

<style scoped>
.scrapbook-body-container {
    /* min-height: 48rem; */
    min-height: 75vh;
    background-color: ghostwhite;
    position: relative;
    background-image: url('https://i.imgur.com/mNBhyUX.jpg');
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
  .go-back-arrow, .go-forward-arrow {
    height: 6vh;
    top: 92%;
    border-radius: 100%;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
  }

  .go-back-arrow:hover, .go-forward-arrow:hover {
    background-color: rgba(0, 0, 0, 0.164);
  }
</style>