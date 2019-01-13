export default {
    namespaced: true,
    state: {
        title: '',
        data: '',
        subtitle: '',
        backgroundUrl: '',
        labels: '',
        menus: [
            {
                url: '/',
                title: '首页'
            },
            {
                url: '/archives',
                title: '归档'
            },
            {
                url: '/tags',
                title: '标签'
            },
            {
                url: '/about',
                title: '关于'
            }
        ]
    },
    mutations: {
        setHeader(state, {title, data, subtitle, labels}) {
            state.title = title
            state.data = data
            state.subtitle = subtitle
            state.labels = labels
        }
    }
}
