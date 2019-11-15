<template>
  <div class="overflow-auto pagination-navigation-container">
    <b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>

<style scoped>

</style>