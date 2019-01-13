<template>
    <article class="post-content">
        <markdown :sourceData="blog.content"></markdown>
    </article>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import 'highlightjs/styles/androidstudio.css'
    import markdown from '@/components/markdown.vue'

    export default {
        name: "Detail",
        components: {
            markdown
        },
        computed: {
            ...mapState('blog', {
                blog: s => s.currentBlog
            })
        },
        methods: {
            ...mapActions('blog', {
                blogById: 'blogById'
            })
        },
        created() {
            let {params: {id}} = this.$route;
            this.blogById({id, store: this.$store});
        }
    }
</script>

<style scoped>

</style>
