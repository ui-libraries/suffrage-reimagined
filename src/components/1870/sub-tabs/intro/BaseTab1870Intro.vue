<template>
    <div class="base-intro-container">
        <router-view />
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
.base-intro-container {
    height: 100%;
    width: 100%;
}
</style>