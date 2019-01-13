import axios from 'axios'


const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 5000 // 请求超时时间
})

export function getBlog(page = 1) {
    return service.get('/blog?page=' + page)
}

export function getBlogById(blogId) {
    return service.get('/blog?blogId=' + blogId)
}
