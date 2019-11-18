<template>
    <div class="base-tab-1854-container">
        <router-view />
    </div>
</template>

<script>
import BaseTab1854Intro from '../1854/sub-tabs/intro/BaseTab1854Intro'
import BaseTab1854AmeliaBloomer from '../1854/sub-tabs/amelia-bloomer/BaseTab1854AmeliaBloomer'
import BaseTab1854SocialMovements from '../1854/sub-tabs/social-movements/BaseTab1854SocialMovements'
    export default {
        components: {
            BaseTab1854Intro,
            BaseTab1854AmeliaBloomer,
            BaseTab1854SocialMovements
        },

        
    }
</script>

<style scoped>
    .base-tab-1854-container {
        width: 100%;
        height: 100%;
    }
</style>