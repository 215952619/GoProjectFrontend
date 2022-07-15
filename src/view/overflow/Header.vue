<template>
    <div id="header">
        <p class="content">
            <span class="content_item" v-for="item in headerMenu" :key="item.label" @click="item.callback(item)">
                {{ item.label }}
            </span>
        </p>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const route = inject('route')
const router = inject('router')

const headerMenu = [
    {
        label: '首页',
        callback: item => {
            if (route.name != 'Overflow') router.push({ name: 'Overflow' })
        },
    },
    {
        label: '归档',
        callback: item => {
            console.log('to archive')
        },
    },
    {
        label: '留言板',
        callback: item => {
            console.log('message board')
        },
    },
    {
        label: '关于本站',
        callback: item => {
            console.log('about website')
        },
    },
]
</script>

<style scoped>
#header {
    background-color: #2196f3;
    line-height: 5rem;
    color: white;
}
</style>
