<template>
    <div class="scrapbook-navigation-container">
        <b-nav tabs justified fill>
            <!-- Home -->
            <b-nav-item to="/tab-about">About</b-nav-item>
            <!-- 1854 - 1870 -->
            <b-nav-item-dropdown id="my-nav-dropdown" text="1854 - 1870" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1854/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1854/amelia-bloomer">Amelia Bloomer</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1854/social-movements">Social Movements</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1870 - 1890 -->
            <b-nav-item-dropdown id="my-nav-dropdown" text="1870 - 1890" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1870/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/legislative-battle">Legislative Battle</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1870/scandal-and-controversy">Scandal &amp; Controversy</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/temperance">Temperance</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1890 - 1915 -->
            <b-nav-item-dropdown id="my-nav-dropdown" text="1890 - 1915" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1890/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/goal-unrealized">Goal Unrealized</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1890/organizing-for-the-vote">Organizing for the Vote</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/boone-parade">Boone Parade</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1916 - 1920 -->
            <b-nav-item-dropdown id="my-nav-dropdown" text="1916 - 1920" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1916/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/referendum">Referendum</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1916/war-work">War Work</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/the-winning-plan">The Winning Plan</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1920 & beyond -->
            <b-nav-item-dropdown id="my-nav-dropdown" text="1920 &amp; Beyond" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1920/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/league-of-women-voters">League of Women Voters</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1920/suffrage-memorial">Suffrage Memorial</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/women-in-politics-today">Women in Politics Today</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
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
    .scrapbook-navigation-container {}

    .tab-pane {
        /* padding: 20px 20px; */
        padding: 20px 0;
        height: 300px !important;
        background-color: ghostwhite;
    }

    
</style>