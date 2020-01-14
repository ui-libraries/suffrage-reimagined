<template>
    <div class="base-scrapbook-container">
        <div class="nav-arrows">

            <md-button @click="prevTab()" @mouseover="arrowLeft = arrowLeftBlack" @mouseleave="arrowLeft = arrowLeftWhite" class="go-back-arrow md-icon-button">
                    <transition name="fade" mode="out-in">
                <!-- <img :src="arrowLeft" :key="arrowLeft"/> -->
                        <md-icon :md-src="arrowLeft" class="icon" :key="arrowLeft"/>
                        </transition>
            </md-button>


            <md-button @click="nextTab()" @mouseover="arrowRight = arrowRightBlack" @mouseleave="arrowRight = arrowRightWhite" class="go-forward-arrow md-icon-button"> 
                    <transition name="fade" mode="out-in">

                <!-- <img class=""  src="../../assets/scrapbook-extras/arrow-right-white.png"> -->
                <md-icon :md-src="arrowRight" class="icon" :key="arrowRight"/>
                        </transition>
            </md-button>
        </div>
        <div class="testing md-elevation-15">
            <scrapbook-navigation />
            <router-view />
        </div>

    </div>
</template>

<script>
    import ScrapbookNavigation from './ScrapbookNavigation'
    import ScrapbookBody from './ScrapbookBody'
    import {
        routeNames
    } from '../../router/index'

    import ArrowLeftWhite from '../../assets/scrapbook-extras/arrow-left-white.svg'
    import ArrowLeftBlack from '../../assets/scrapbook-extras/arrow-left-black.svg'

    import ArrowRightBlack from '../../assets/scrapbook-extras/arrow-right-black.svg'
    import ArrowRightWhite from '../../assets/scrapbook-extras/arrow-right-white.svg'

    export default {


        components: {
            ScrapbookNavigation,
            ScrapbookBody
        },

        data() {
            return {
                routes: routeNames,
                arrowLeftWhite: ArrowLeftWhite,
                arrowLeftBlack: ArrowLeftBlack,
                arrowLeft: ArrowLeftWhite,

                arrowRightWhite: ArrowRightWhite,
                arrowRightBlack: ArrowRightBlack,
                arrowRight: ArrowRightWhite
            }
        },

        methods: {
            // prevTab: goToPrevRoute,
            // nextTab: goToNextRoute,
            prevTab() {
                let index = this.routes.indexOf(this.$route.name);
                if (this.routes[index - 1]) {
                    this.$router.push({
                        name: this.routes[index - 1]
                    });
                }
            },
            nextTab() {
                let index = this.routes.indexOf(this.$route.name);
                if (this.routes[index + 1]) {
                    this.$router.push({
                        name: this.routes[index + 1]
                    });
                }
            },
        }


    }
</script>

<style scoped>
    .base-scrapbook-container {
        margin: 1rem 0;
        padding: 1rem;
    }

    .md-button {
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    .go-back-arrow {
        position: absolute;
        top: 35rem;
        left: -7rem;
        
    }

    .go-back-arrow:hover {
    }

    .go-forward-arrow {
        position: absolute;
        top: 35rem;
        right: -7rem;
    }

    .go-back-arrow,
    .go-forward-arrow {
        width: 80px;
        height: auto;
        padding: 0 0;

    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>