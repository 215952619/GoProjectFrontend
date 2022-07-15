import axios from 'axios'
import { getBrowser } from '@/utils/func'
import { baseUrl, default_timeout } from '@/utils/vars'

const NewInstance = () => {
    return axios.create({
        baseURL: baseUrl,
        timeout: default_timeout,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

const tokenInterceptorHandler = (config) => {
    requestInterceptor(config)

    let token = localStorage.getItem('token') || ''
    if (!config.headers) config.headers = {}
    config.headers.Authorization = token
    return config
}

const requestInterceptor = (config) => {
    if (config.method === 'get' && getBrowser().includes('ie')) {
        config.params['timestamp'] = new Date().getTime()
    }
    return config
}

const successResponseInterceptor = (response) => {
    if (response?.status === 200) {
        const { code, msg, data } = response.data

        if (code != 1000) {
            return Promise.reject(msg || '未知错误')
        } else {
            return Promise.resolve(data)
        }
    }

    if (String.prototype.startsWith.call(response?.status, '4')) {
        return Promise.reject('网络错误')
    }

    if (String.prototype.startsWith.call(response?.status, '5')) {
        return Promise.reject('服务器出错，请联系管理员')
    }

    // 只要http状态码不是200,就认为跟服务器的交互失败
    return Promise.reject('未知错误')
}

const errorResponseInterceptor = (error) => {
    return Promise.reject(error)
}

export const instance = NewInstance()

// request 拦截
instance.interceptors.request.use(
    config => requestInterceptor(config),
    err => Promise.reject(err)
)

// response 拦截器
instance.interceptors.response.use(
    response => successResponseInterceptor(response),
    error => errorResponseInterceptor(error)
)

export const tokenInstance = NewInstance()

// request 拦截
tokenInstance.interceptors.request.use(
    config => tokenInterceptorHandler(config),
    err => Promise.reject(err)
)

// response 拦截器
tokenInstance.interceptors.response.use(
    response => successResponseInterceptor(response),
    error => errorResponseInterceptor(error)
)