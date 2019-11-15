<template>
    <div class="base-tab-1854-container">
        <b-tabs pills card vertical>
            <b-tab title="Tab 1" active>
                <b-card-text>
                    <base-tab-1854-intro />
                </b-card-text>
            </b-tab>
            <b-tab title="Tab 2">
                <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
            <b-tab title="Tab 3">
                <b-card-text>Tab contents 3</b-card-text>
            </b-tab>
        </b-tabs>
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
        }
    }
</script>

<style scoped>
    .base-tab-1854-container {
        width: 100%;
        height: 100%;
    }
</style>