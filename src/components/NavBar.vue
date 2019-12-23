<template>
    <div>
        <md-toolbar class="nav-header">
            <md-button v-if="isMobile()" class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <h4 class="md-title nav-title">
                <router-link to="/" class="stretched-link header-anchor">Women's Suffrage in Iowa Scrapbook
                </router-link>
            </h4>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="">Women's Suffrage</span>
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <span class="md-list-item-text">
                        <router-link to="/tab-about/">
                            About
                        </router-link>
                    </span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon></md-icon> -->
                    <span class="md-list-item-text">
                        <router-link to="/tab-1854/">1854 - 1870</router-link>
                    </span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon></md-icon> -->
                    <span class="md-list-item-text">
                        <router-link to="/tab-1870">1870 - 1890</router-link>
                    </span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon></md-icon> -->
                    <span class="md-list-item-text">
                        <router-link to="/tab-1890">1890 - 1915</router-link>
                    </span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon></md-icon> -->
                    <span class="md-list-item-text">
                        <router-link to="/tab-1916">1916 - 1920</router-link>
                    </span>
                </md-list-item>

                <md-list-item>
                    <!-- <md-icon></md-icon> -->
                    <span class="md-list-item-text">
                        <router-link to="/tab-1920">1920 &amp; Beyond</router-link>
                    </span>
                </md-list-item>
            </md-list>
        </md-drawer>

    </div>
</template>

<script>
    export default {
        name: 'Temporary',
        data() {
            return {
                showNavigation: false,
                showSidepanel: false,
                window: {
                    width: 0,
                    height: 0,
                }
            }
        },

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },

            isMobile() {
                return this.window.width < 1000 ? true : false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-header {
        width: 100%;
        font-size: 3rem;
        background-color: #FFCD00 !important;
        text-align: center;
        font-weight: bolder;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 2em;
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
        background-image: url('../assets/temp-book-paper.jpg')
    }

    .md-list {
        background-image: url('../assets/temp-book-paper.jpg')
    }

    .md-list a {
        color: black !important;
    }

    .md-content {
        padding: 16px;
    }

    @media only screen and (max-width: 650px) {
        .nav-title {
            font-size: .27em !important;
        }
    }
</style>