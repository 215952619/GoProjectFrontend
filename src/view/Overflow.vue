<template>
    <Header></Header>
    <Login></Login>
    <router-view />
</template>

<script setup>
import Header from '@/view/overflow/Header.vue'
import Login from '@/view/Login.vue'
</script>
