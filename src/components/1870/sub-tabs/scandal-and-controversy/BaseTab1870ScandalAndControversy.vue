<template>
    <div class="base-container">
        <router-view />
    </div>
</template>

<script>
import PaginationNavigation from '../../../helpers/PaginationNavigation'
export default {
    
    components: {
    },
}
</script>

<style scoped>
.base-container {
    height: 100%;
    width: 100%;
}
</style>