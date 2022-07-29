<template>
    <Header></Header>
    <Login v-if="showLoginBox"></Login>
    <router-view />
</template>

<script setup>
import Header from '@/view/overflow/Header.vue'
import Login from '@/view/Login.vue'
import { ref } from 'vue'

let showLoginBox = ref(true)
</script>
