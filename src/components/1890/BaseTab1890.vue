<template>
    <div class="base-container">
    <transition name="fadeScrapbook" appear mode="out-in">
        <router-view />
        </transition>
    </div>
</template>

<script>
{        
    }
</script>

<style scoped>
    .base-container {
        width: 100%;
        height: 100%;
    }
</style>