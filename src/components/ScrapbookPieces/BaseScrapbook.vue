<template>
    <div class="base-scrapbook-container">
    <div class="testing md-elevation-15">
        <scrapbook-navigation />
        <router-view />
        
    </div>
</div>
</template>

<script>
import ScrapbookNavigation from './ScrapbookNavigation'
import ScrapbookBody from './ScrapbookBody'
export default {
    

    components: {
        ScrapbookNavigation,
        ScrapbookBody
    },

    
}
</script>

<style scoped>
.base-scrapbook-container {
    margin: 1rem 0;
    padding: 1rem;
}



</style>