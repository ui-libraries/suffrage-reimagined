<template>
  <div id="app">
    <NavBar />
    
    <b-container fluid class="test-container">
        <b-row>
            <b-col>
                <router-view />
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.test-container {
  text-align: center;
}

ul {
  margin-bottom: 0 !important;
}
</style>
