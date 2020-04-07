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

    beforeMount() {
      // this.delay(4000);
    },

    mounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 4000)
    },
  }
</script>

<style lang="scss">
  :root {
    --primary-color: #FFCD00;
    --secondary-color: black;
    --background-color: rgba(241, 240, 240, 0.877);
  }

  ::selection {
    background: rgba(0, 0, 0, 0.116) !important;
    color: inherit !important;
  }

  ::-moz-selection {
    background: rgba(0, 0, 0, 0.116) !important;
    color: inherit !important;
  }

  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Beth+Ellen&display=swap');

  @font-face {
    font-family: 'Gotham Bold';
    src: url('../public/fonts/gotham-bold.otf') format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('../public/fonts/gotham-book.woff') format('woff');
    font-display: swap;
  }

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

  .card-dark {
    color: var(--secondary-color);
  }

  html,
  body {
    /* gets rid of mobile dev overflow */
    background-color: var(--background-color);
  }

  .scrapbook-content-container div {
    margin: 10px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Gotham Bold'
  }

  .body-container {
    text-align: center;
    font-size: 1.1rem;

  }

  ul {
    margin-bottom: 0 !important;
  }

  .carousel-indicators {
    margin-bottom: 3% !important;
  }

  /* Link css below */
  .stretched-link::after {
    z-index: 0 !important;
  }

  .text-anchor {
    color: var(--secondary-color) !important;
    text-decoration: underline !important;
  }

  .text-anchor:hover {
    background-color: rgba(0, 0, 0, 0.459);
  }

  .header-anchor {
    color: var(--secondary-color) !important;
    text-decoration: none !important;
  }

  .nav-link-custom {
    text-decoration: none !important;
    color: white !important;
    background-color: var(--secondary-color);

    transition: .3s cubic-bezier(.25, .8, .25, 1);
    transition-property: color, background-color, opacity;
  }

  .nav-link-custom:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color) !important;
  }

  .nav-link-custom a {
    color: white !important;
    text-decoration: none !important;
  }

  .nav-link-custom a:hover {
    color: var(--secondary-color) !important;
    text-decoration: none !important;
  }

  .active {
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
    text-decoration: none !important;

  }

  /* Active sub-item in scrapbook dropdown tab */
  .nav-item li .router-link-active {
  }

  .nav-item li .router-link-active .active-icon {
    background-image: url('./assets/scrapbook-extras/bookmark-icon.png')
  }

  .dropdown-item {
    position: relative !important;
  }

  .nav-item > .router-link-active:hover {
    color: var(--secondary-color) !important;
    text-decoration: underline !important;
  }

  .nav-item .router-link-exact-active {
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
  }

  .nav-tabs .nav-item.show .nav-link {
    background-color: var(--primary-color) !important;
    color: var(--secondary-color) !important;
  }

  .nav-tabs .nav-link {
    border: none !important;
  }

  .dropdown-menu {
    background-color: var(--primary-color) !important;
    margin-top: 0 !important;
    border: none;
    min-width: 12rem !important;
    border: 0 solid transparent !important;
  }

  .dropdown-menu a {
    color: var(--secondary-color) !important;
  }

  .dropdown-menu a:hover {
    background-color: var(--primary-color) !important;
  }

  /* Alter vue material css */
  .md-list.md-double-line .md-list-item-content {
    min-height: 35px !important;
  }

  .md-overlay {
    z-index: 10000 !important;
  }

  /* Alter scrollbar - smooth scrollbar */
  .scrollbar-thumb {
    border-radius: 0px !important;
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

  /* For external resources */
  @media only screen and (max-width: 775px) {
    .navigation-to-resources {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 526px) {
    .navigation-to-resources {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 440px) {
    .navigation-to-resources {
      font-size: 10px;
    }
  }

  .carousel-control-prev-icon {
    background-image: url('./assets/scrapbook-extras/arrow-left-white.svg') !important;
  }

  .carousel-control-next-icon {
    background-image: url('./assets/scrapbook-extras/arrow-right-white.svg') !important;
  }

  .md-button .md-ripple {
    padding: 0 0 !important;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease-in-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }

  .fadeScrapbook-enter-active {
    transition: opacity 1s ease-in-out;
  }

  // .fadeScrapbook-leave-active {
  //   transition: opacity .2s ease-in-out;
  // }

  .fadeScrapbook-enter {
    opacity: 0;
  }

  // .fadeScrapbook-leave-to {
  //   opacity: 0;
  // }

  .fadeScrapbook-enter-to,
  .fadeScrapbook-leave {
    opacity: 1;
  }
</style>