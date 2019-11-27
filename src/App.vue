<template>
  <div id="app">
    <NavBar />
    <b-container fluid class="test-container">
        <b-row align-h="center">
            <b-col lg="6" md="12" sm="12" cols="12">
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

#app {
  font-family: 'Gotham Book', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.test-container {
  text-align: center;
}

ul {
  margin-bottom: 0 !important;
}

.carousel-indicators {
margin-bottom: 3% !important;
}

/* Link css below */
.nav-link-custom {
  text-decoration: none;
  color: white;
  background-color: black;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.nav-link-custom:hover {
  background-color: #FFCD00;
  color: black;
}

.active {
         background-color: #FFCD00 !important;
         color: black !important;
    }

.nav-tabs .nav-item.show .nav-link {
  background-color: #FFCD00 !important;
}

.nav-link-custom:hover {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.dropdown-menu {
    background-color: #FFCD00 !important;
}
</style>
