import {getBlog, getBlogById} from '@/api'
import dayjs from 'dayjs'

export default {
    namespaced: true,
    state: {
        blogs: '',
        currentBlog: ''
    },
    mutations: {
        setBlogs(state, blogs) {
            blogs.forEach((item) => {
                item.tags = item.tags.map(tag => {
                    return {
                        title: tag,
                        url: tag
                    }
                })
                item.date = dayjs(item.updateTime).format('MM月 DD日, YYYY')
            })
            state.blogs = blogs
        },

        setCurrentBlog(state, currentBlog) {
            state.currentBlog = currentBlog
        }
    },
    actions: {
        /**
         * 得到所有的blog数据
         * @param commit
         * @param $axios
         * @returns {Promise<void>}
         */
        async getBlog({commit}, page) {
            const {data: {data}} = await getBlog(page);
            commit('setBlogs', data.blogs)
        },
        /**
         * 根据id得到具体的blog数据
         * @param commit
         * @param $axios
         * @param id
         * @param store
         * @returns {Promise<void>}
         */
        async blogById({commit}, {id, store}) {
            const {data: {data}} = await getBlogById(id);
            store.commit('title/setHeader', {
                title: data.title,
                subtitle: dayjs(data.updateTime).format('YYYY-MM-DD HH:mm:ss'),
                labels: data.tags.map(item => {
                    return {
                        title: item,
                        url: ''
                    }
                })
            })
            commit('setCurrentBlog', data)
        }
    }
}
