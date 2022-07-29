<template>
    <div id="login">
        <el-form>
            <el-card>
                <el-input label="用户名" placeholder="请输入您的用户名或者绑定手机号"></el-input>
                <el-input label="密码" placeholder="请输入您的密码"></el-input>
                <el-button>登录</el-button>
            </el-card>
            <el-button @click="loginWithGithub">login with github</el-button>
            <el-button @click="loginWithGitee">login with gitee</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { instance } from '@/plugins/http'

const loginWithGithub = async () => {
    instance.get('/user/sso/github').then(data => {
        location.href = data
    })
}

const loginWithGitee = async () => {
    instance.get('/user/sso/gitee').then(data => {
        location.href = data
    })
}
</script>
