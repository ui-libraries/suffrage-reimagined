<template>
    <div class="nav-arrows">

        <md-button @click="prevTab()" @mouseover="arrowLeft = arrowLeftBlack" @mouseleave="arrowLeft = arrowLeftWhite"
            class="go-back-arrow md-icon-button" name="page-arrow-go-back">
            <transition name="fade" mode="out-in">
                <!-- <img :src="arrowLeft" :key="arrowLeft"/> -->
                <md-icon :md-src="arrowLeft" class="icon" :key="arrowLeft" />
            </transition>
        </md-button>


        <md-button @click="nextTab()" @mouseover="arrowRight = arrowRightBlack"
            @mouseleave="arrowRight = arrowRightWhite" class="go-forward-arrow md-icon-button" name="page-arrow-go-forward">
            <transition name="fade" mode="out-in">

                <!-- <img class=""  src="../../assets/scrapbook-extras/arrow-right-white.png"> -->
                <md-icon :md-src="arrowRight" class="icon" :key="arrowRight" />
            </transition>
        </md-button>
    </div>
</template>

<script>
    import {
        routeNames
    } from '../../router/index'

    import ArrowLeftWhite from '../../assets/scrapbook-extras/arrow-left-white.svg'
    import ArrowLeftBlack from '../../assets/scrapbook-extras/arrow-left-black.svg'

    import ArrowRightBlack from '../../assets/scrapbook-extras/arrow-right-black.svg'
    import ArrowRightWhite from '../../assets/scrapbook-extras/arrow-right-white.svg'
    export default {

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
    .icon {
        width: 100%;
        height: 100%;
    }

    .go-back-arrow {
        position: absolute;
        top: 35rem;
        left: -6rem;

    }

    .go-forward-arrow {
        position: absolute;
        top: 35rem;
        right: -6rem;
    }

    .go-back-arrow,
    .go-forward-arrow {
        width: 80px;
        height: auto;
        padding: 0 0;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s ease-in-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }
</style>