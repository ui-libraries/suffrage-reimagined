<template>
    <div class="base-tab-1920-container">
    <transition name="fadeScrapbook" appear mode="out-in">
        <router-view />
        </transition>
    </div>
</template>

<script>
import BaseTab1920Intro from '../1920/sub-tabs/intro/BaseTab1920Intro'
import BaseTab1920LeagueOfWomenVoters from '../1920/sub-tabs/league-of-women-voters/BaseTab1920LeagueOfWomenVoters'
import BaseTab1920SuffrageMemorial from '../1920/sub-tabs/suffrage-memorial/BaseTab1920SuffrageMemorial'
import BaseTab1920WomenInPoliticsToday from '../1920/sub-tabs/women-in-politics-today/BaseTab1920WomenInPoliticsToday'
    export default {
        components: {
            BaseTab1920Intro,
            BaseTab1920LeagueOfWomenVoters,
            BaseTab1920SuffrageMemorial,
            BaseTab1920WomenInPoliticsToday
        },
    }
</script>

<style scoped>
    .base-tab-1920-container {
        width: 100%;
        height: 100%;
    }
</style>