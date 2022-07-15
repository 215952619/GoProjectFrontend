<template>
    <p class="notfound">404</p>
    <p class="msg">
        您浏览的页面没有找到。
        <router-link to="/">回到首页</router-link>
    </p>
</template>

<style scoped>
.notfound {
    text-align: center;
    font-size: 5rem;
}
.msg {
    text-align: center;
    color: #ccc;
}
</style>
