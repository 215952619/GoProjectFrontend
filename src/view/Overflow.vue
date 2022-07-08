<template>
    <Header></Header>
    <Login></Login>
    <router-view />
</template>

<script setup lang="ts">
import Header from '@/view/overflow/Header.vue'
import Login from '@/view/Login.vue'
</script>
