<template>
    <div class="base-container">
        <router-view />
        <pagination-navigation :num-pages="1"/>
    </div>
</template>

<script>
import PaginationNavigation from '../../../helpers/PaginationNavigation'
export default {
    
    components: {
        PaginationNavigation
    },
}
</script>

<style scoped>
.base-container {
    height: 100%;
    width: 100%;
}
</style>