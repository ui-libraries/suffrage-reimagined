<template>
    <div class="component-container">
        <router-view />
        <pagination-navigation :num-pages="3" />
    </div>
</template>

<script>
import PaginationNavigation from '../../../helpers/PaginationNavigation'
export default {
    
    components: {
        PaginationNavigation
    }
}
</script>

<style scoped>
</style>