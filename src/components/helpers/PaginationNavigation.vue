<template>
  <div class="overflow-auto pagination-navigation-container">
    <b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages='numPages' use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    props: ['num-pages'],

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
        return {
          path: `${this.baseUrl}/pages/${pageNum}`,
        }
      }
    }
  }
</script>

<style scoped>

</style>