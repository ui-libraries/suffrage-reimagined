<template>
  <div class="overflow-auto pagination-navigation-container">
    <b-pagination-nav class="pagination-navigation" align="center" :link-gen="linkGen" :number-of-pages='numPages' use-router></b-pagination-nav>
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

    mounted() {
      this.$router.push(`${this.baseUrl}/pages/1`)
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
.pagination-navigation-container {
  display: block;
  margin-top: 3rem;
}

.pagination-navigation {
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: .8;
  transition: opacity 1s ease-in-out;
}

.pagination-navigation:hover {
  opacity: 1;
}
</style>