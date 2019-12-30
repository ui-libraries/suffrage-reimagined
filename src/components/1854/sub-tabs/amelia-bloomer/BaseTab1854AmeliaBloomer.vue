<template>
    <div class="component-container">
        <router-view />
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