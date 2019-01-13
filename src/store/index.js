import Vue from 'vue'
import Vuex from 'vuex'
import title from './modules/title'
import blog from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        title,
        blog
    }
})
