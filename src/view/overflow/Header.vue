<template>
    <div id="header">
        <p class="content">
            <span class="content_item" v-for="item in headerMenu" :key="item.label" @click="item.callback(item)">
                {{ item.label }}
            </span>
        </p>
    </div>
    <el-menu mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in headerMenu" :key="item.label" :index="item.index">{{ item.label }}</el-menu-item>
    </el-menu>
</template>

<script setup>
import { inject } from 'vue'

const route = inject('route')
const router = inject('router')

const headerMenu = [
    {
        label: '首页',
        index: 'Main',
    },
    {
        label: '归档',
        index: 'Archive',
    },
    {
        label: '留言板',
        index: 'Board',
    },
    {
        label: '关于本站',
        index: 'About',
    },
]

const handleSelect = (key, keyPath) => {
    if (route.name != key) {
        router.push({ name: key })
    }
}
</script>

<style scoped>
#header {
    background-color: #2196f3;
    line-height: 5rem;
    color: white;
}
</style>
