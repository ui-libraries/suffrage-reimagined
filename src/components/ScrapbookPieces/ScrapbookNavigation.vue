<template>
    <div class="scrapbook-navigation-container">
    <b-tabs small justified fill>
        <b-tab title="test 1">
            <b-card-text>
                <base-tab-1854 />
            </b-card-text>
        </b-tab>
        <b-tab title="test 2"></b-tab>
        <b-tab title="test 3"></b-tab>
        <b-tab title="test 4"></b-tab>
    </b-tabs>
</div>
</template>

<script>
import BaseTab1854 from '../1854/BaseTab1854'
export default {
    components: {
        BaseTab1854,
    }
}
</script>

<style scoped>
.scrapbook-navigation-container {
}

.tab-pane {
    /* padding: 20px 20px; */
    padding: 20px 0;
    height: 300px !important;
    background-color: ghostwhite;
}

.col-auto {
    background-color: black !important;
}

</style>