<script setup>
import { provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

provide('route', route)
provide('router', router)
</script>

<template>
    <router-view />
    <router-view name="footer" />
</template>

<style>
#app {
    min-height: 100%;
    height: fit-content;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
