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

        <md-drawer class="entire-drawer" :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="drawer-header" md-elevation="1">
                <span flex class="md-title text-center">Bookmark</span>
            </md-toolbar>

            <md-list class="md-double-line drawer-body">
                <md-subheader class="sub-header">About</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text">
                    <span>Introduction</span>
                    </div>
                </md-list-item>

                <md-divider class="divider"></md-divider>
                <md-divider class="divider"></md-divider>
                <md-subheader class="sub-header">1854 to 1870</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Amelia Bloomer</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Social Movements</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>
                
                <md-subheader class="sub-header">1870 to 1890</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Legislative Battle</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Scandal &amp; Controversy</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Temperance</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1890 to 1915</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Goal Unrealized</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Organizing for the Vote</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>African American Women</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Boone Parade</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1916 to 1920</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Referendum</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>War Work</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>The Winning Plan</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1916 to 1920</md-subheader>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>League of Women Voters</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Suffrage Memorial</span></div>
                </md-list-item>
                <md-list-item to="/tab-about/">
                    <div class="md-list-item-text"><span>Women in Politics Today</span></div>
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
        // background-image: url('../assets/temp-book-paper.jpg')
    }

    .md-list {
        // background-image: url('../assets/temp-book-paper.jpg')
    }

    .sub-header {
        color: grey !important;
    }

    .divider {
        background-color: rgba(187, 187, 187, 0.541) !important;
    }

    .entire-drawer {
        background-color: black !important;
    }

    .drawer-header {
        background-color: #FFCD00 !important;
    }

    .drawer-body {
        background-color: rgba(0, 0, 0, 0.705) !important;
    }

    .md-list-item-text {
        color: white;
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