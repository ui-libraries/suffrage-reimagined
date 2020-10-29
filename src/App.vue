<template>
  <transition name="fade" appear>
    <div id="app">
      <loading-screen :is-loading="isLoading"></loading-screen>
      <div>
        <NavBar />
        <b-container fluid class="body-container">
          <b-row align-h="center">
            <b-col xl="10" lg="12" md="12" sm="12" cols="12">
              <router-view />
            </b-col>
          </b-row>
        </b-container>
        <Footer />
      </div>
    </div>
  </transition>
</template>

<script>
  import NavBar from './components/NavBar'
  import Footer from './components/Footer'
  import LoadingScreen from './components/helpers/LoadingScreen'
  export default {
    components: {
      NavBar,
      Footer,
      LoadingScreen
    },

    data() {
      return {
        isLoading: true,
      }
    },

    mounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 3400)
    },
  }
</script>

<style lang="scss">
  @import './assets/styles/bootstrap-changes.css';
  @import './assets/styles/material-changes.css';
  @import './assets/styles/utility-tags.css';
  @import './assets/styles/transitions.css';
  @import './assets/styles/fonts.css';


  #app {
    font-family: 'Gotham Book', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    color: var(--secondary-color);
    background-color: var(--background-color);
    margin: 0 0;
    padding: 0 0;
    overflow-x: hidden;
  }

  html,
  body {
    background-color: var(--background-color);
  }

  .body-container {
    text-align: center;
    font-size: 1.1rem;
  }

  /* media queries for mobile layout */
  @media only screen and (max-width: 1200px) {

    /* bootstrap-vue container over whole app */
    .container-fluid {
      padding: 0 0 !important;
    }

    /* base-scrapbook component */
    .base-scrapbook-container {
      padding: 0 0 !important;
      margin: 0 0 !important;
    }
  }
</style>