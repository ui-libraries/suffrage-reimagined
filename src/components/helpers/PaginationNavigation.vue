<template>
  <div class="overflow-auto pagination-navigation-container">
    <b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages="10" base-url=url use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: '',
      }
    },

    created() {
      this.baseUrl = this.$router.currentRoute.path
    },
    
    methods: {
      linkGen(pageNum) {
        // const route = this.$router.currentRoute.path;
        // console.log(route)
        // console.log(this.$router.query)
        // return `?page=${pageNum}`
        const route = {
          path: `${this.baseUrl}/pages/${pageNum}`,
        }

        console.log(route);
        console.log(this.baseUrl)
        return route;
        // return {
          // path: `${route}/page=${pageNum}`,
        // }
      }
    }
  }
</script>

<style scoped>

</style>