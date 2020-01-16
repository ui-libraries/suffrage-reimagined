<template>
    <transition name="fade" appear>

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
    </transition>

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
    src: url('../public/fonts/gotham-bold.otf') format('opentype');
    font-display: swap;
  }

   @font-face {
    font-family: 'Gotham Book';
    src: url('../public/fonts/gotham-book.TTF') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Signature';
    src: url('../public/fonts/signature.ttf') format('truetype');
    font-display: swap;
  }

  #app {
    font-family: 'Gotham Book', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    color: black;
    background-color: rgba(241, 240, 240, 0.877);
  }

  .card-dark {
    color: black;
  }

html,body {
    /* gets rid of mobile dev overflow */
    overflow-x: hidden;
}

  .scrapbook-content-container div{
    margin: 10px 0;
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

    .text-anchor:hover {
      background-color: rgba(0, 0, 0, 0.459);
    }

  .header-anchor {
    color: black !important;
    text-decoration: none !important;
  }

  .nav-link-custom {
    text-decoration: none !important;
    color: white !important;
    background-color: black;

    transition: .3s cubic-bezier(.25,.8,.25,1);
    transition-property: color, background-color, opacity;
  }

  .nav-link-custom:hover {
    background-color: #FFCD00;
    color: black !important;
  }

  .nav-link-custom a {
    color: white !important;
    text-decoration: none !important;
  }

  .nav-link-custom a:hover {
    color: black !important;
    text-decoration: none !important;
  }

  .active {
    background-color: #FFCD00 !important;
    color: black !important;
    text-decoration: none !important;
  }

  .nav-item .router-link-active {
    color: black !important;
  }

  .nav-item .router-link-active:hover {
    color: black !important;
    text-decoration: none !important;
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

      /* Alter vue material css */
.md-list.md-double-line .md-list-item-content {
    min-height: 35px !important;
}

    /* Alter scrollbar - smooth scrollbar */
    .scrollbar-thumb {
        border-radius: 0px !important;
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

        .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>