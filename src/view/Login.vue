<template>
    <div id="login">
        <el-form>
            <el-button @click="loginWithGithub">login with github</el-button>
            <el-button @click="loginWithGitee">login with gitee</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { instance } from '@/plugins/http'

const loginWithGithub = async () => {
    instance.get('/user/sso/github').then(data => {
        location.href = data.data
    })
}

const loginWithGitee = async () => {
    instance.get('/user/sso/gitee').then(data => {
        location.href = data.data
    })
}
</script>
