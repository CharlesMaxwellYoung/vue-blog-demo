export default {
    namespaced: true,
    state: {
        title: '',
        data: '',
        subtitle: '',
        backgroundUrl: '',
        labels: ''
    },
    mutations: {
        setHeader(state, { title, data, subtitle, labels }) {
            state.title = title
            state.data = data
            state.subtitle = subtitle
            state.labels = labels
        }
    }
}
