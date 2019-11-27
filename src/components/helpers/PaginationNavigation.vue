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
        paths: [
          '/tab-about',
          '/tab-1854',
          '/tab-1870',
          '/tab-1890',
          '/tab-1916',
          '/tab-1920'
        ]
      }
    },
    
    methods: {
      linkGen(pageNum) {
          return `page=${pageNum}`
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