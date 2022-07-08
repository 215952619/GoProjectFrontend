<template>
    <div id="login">
        <el-form>
            <el-button @click="loginWithGithub">login with github</el-button>
            <el-button @click="loginWithGitee">login with gitee</el-button>
        </el-form>
    </div>
</template>

<script setup lang="ts">
// import { instance } from '@/plugins/http/index'
// console.log(instance)
import axios from 'axios'

const loginWithGithub = async () => {
    // await instance.get('/user/sso/github')
    axios.get('http://10.0.7.112:9507/api/user/sso/github').then(data => {
        if (data.status === 200 && data?.data?.code === 1000) window.open(data.data.data)
    })
}

const loginWithGitee = async () => {
    // await instance.get('/user/sso/gitee')
    axios.get('http://10.0.7.112:9507/api/user/sso/gitee').then(data => {
        if (data.status === 200 && data?.data?.code === 1000) window.open(data.data.data)
    })
}
</script>
