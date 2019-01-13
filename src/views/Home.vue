<template>
    <main class="site__content">
        <section class="blog">
            <div class="container">
                <div class="post-list" v-if="blogs.length>0">
                    <card v-for="(blog,index) in blogs" :key="index" :blogCard="blog" :labels="blog.tags"
                          @onDetail="showDetail"></card>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import card from '@/components/card.vue'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'home',
        components: {
            card
        },
        computed: {
            ...mapState('blog', {
                blogs: s => s.blogs
            })
        },
        methods: {
            ...mapActions('blog', {
                getBlog: 'getBlog'
            }),
            /**
             * 显示详情
             * @param blog
             */
            showDetail(blog) {
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: blog._id
                    }
                })
            }
        },
        created() {
            this.getBlog()
        }
    }
</script>
