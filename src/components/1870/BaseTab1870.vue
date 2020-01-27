<template>
    <div class="base-tab-container">
    <transition name="fadeScrapbook" appear mode="out-in">
        <router-view />
        </transition>
    </div>
</template>

<style scoped>
    .base-tab-container {
        width: 100%;
        height: 100%;
    }
</style>