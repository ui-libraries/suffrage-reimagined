<template>
    <div class="base-intro-container">
        <router-view />
    </div>
</template>

<script>
export default {
    
    components: {
    },

    data() {
        return {
            images: [
                {
                    id: 1,
                    url: '',
                }
            ]
        }
    }
}
</script>

<style scoped>
.base-intro-container {
    height: 100%;
    width: 100%;
}

</style>