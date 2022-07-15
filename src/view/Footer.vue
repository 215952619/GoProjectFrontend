<template>
    <div id="footer">
        <p class="content">
            <span class="content_item" v-for="item in footerMenu" :key="item.label" @click="item.callback(item)">
                {{ item.label }}
            </span>
        </p>
    </div>
</template>

<script setup>
const footerMenu = [
    {
        label: '©2018-2022',
        callback: item => {},
    },
    {
        label: '关于本站',
        callback: item => {
            console.log('about website')
        },
    },
    {
        label: '联系站长',
        callback: item => {
            console.log('need website owner')
        },
    },
    {
        label: '意见反馈',
        callback: item => {
            console.log('feed back')
        },
    },
]
</script>

<style scoped>
#footer {
    border-top: 1px solid var(--border-color);
    border-top: 1px solid #ccc;
    text-align: center;
    font-size: 1rem;
}

.content {
    padding: 5px;
    line-height: 1.5;
}

.content_item {
    cursor: pointer;
}

.content_item:hover {
    text-decoration: underline;
    text-decoration-color: var(--main-light-color);
    color: var(--main-light-color);
}

.content_item:not(:first-child) {
    padding-left: 5px;
}

.content_item:not(:last-child) {
    border-right: 1px solid black;
    padding-right: 5px;
}
</style>
