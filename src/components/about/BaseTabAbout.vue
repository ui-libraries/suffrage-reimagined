<template>
    <div class="base-container">
    <transition name="fadeScrapbook" appear mode="out-in">
        <router-view />
        </transition>
    </div>
</template>

<style scoped>
.base-container {
    height: 100%;
    width: 100%;
}
</style>