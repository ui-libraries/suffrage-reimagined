<template>
  <div id="app">
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
</template>

<script>
  import NavBar from './components/NavBar'
  import Footer from './components/Footer'
  export default {
    components: {
      NavBar,
      Footer,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Beth+Ellen&display=swap');
  @font-face {
    font-family: 'Gotham Bold';
    src: url('./assets/fonts/gotham-bold.otf') format('opentype');
  }

   @font-face {
    font-family: 'Gotham Book';
    src: url('./assets/fonts/gotham-book.TTF') format('truetype');
  }

  #app {
    font-family: 'Gotham Book', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    color: black;
    /* gets rid of mobile dev overflow */
    overflow-x: hidden;
    background-color: rgba(241, 240, 240, 0.877);
  }

  .scrapbook-content-container div{
    padding: 10px 0;
  }

  h1, h2, h3, h4, h5, h6 {
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
    color: black !important;
    text-decoration: underline !important;
  }

  .header-anchor {
    color: black !important;
    text-decoration: none !important;
  }

  .nav-link-custom {
    text-decoration: none !important;
    color: white !important;
    background-color: black;
  }

  .nav-link-custom:hover {
    background-color: #FFCD00;
    color: black !important;
  }

  .active {
    background-color: #FFCD00 !important;
    color: black !important;
  }

  .nav-tabs .nav-item.show .nav-link {
    background-color: #FFCD00 !important;
    color: black !important;
  }

  .nav-tabs .nav-link {
    border: none !important;
  }

  .dropdown-menu {
    background-color: #FFCD00 !important;
    margin-top: 0 !important;
    border: none;
    min-width: 12rem !important;
    border: 0 solid transparent !important;
  }

  .dropdown-menu a {
    color: black !important;
  }

    .dropdown-menu a:hover {
    background-color: #FFCD00 !important;
  }

  /* media queries for mobile layout */
  @media only screen and (max-width: 1000px) {
    /* bootstrap-vue container over whole app */
    .container-fluid {
      padding: 0 0 !important;
    }

    /* base-scrapbook component */
    .base-scrapbook-container {
      padding: 0 0 !important;
      margin: 0 0 !important;
    }

    /* Alter vue material css */


  }
</style>