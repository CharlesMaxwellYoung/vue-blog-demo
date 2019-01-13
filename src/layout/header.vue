<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <a class="header__logo">
                        <div class="header__logo--container">
                        </div>
                    </a>
                    <nav class="header__links">
                        <div class="container header__links-wrapper">
                            <a class="header__link" v-for="(menu,index) in menus" :key="index" :href="menu.url">
                                <span>{{menu.title}}</span>
                            </a>
                        </div>
                    </nav>
                    <div class="header__toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
        <div class="hero lazyloaded"
             :style="{'background-image':'url('+backgroundUrl+')'}">
            <div class="hero__wrap">
                <div class="hero__categories">
                    <vLabel v-for="(label,index) in labels" :key="index" :href="label.url"
                            v-if="labels && labels.length>0">
                        {{label.title}}
                    </vLabel>
                </div>
                <h1 class="hero__title">{{title}}</h1>
                <p class="hero__meta">
          <span v-if="data !==''">
            <time>{{data}}</time>
          </span>
                    <span v-if="subtitle !== ''">
            {{subtitle}}
          </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import vLabel from '@/components/label.vue'

    export default {
        name: 'vHeader',
        data() {
            return {
                menus: [
                    {
                        url: '',
                        title: 'Home'
                    },
                    {
                        url: '',
                        title: 'About'
                    },
                    {
                        url: '',
                        title: 'Contact'
                    }
                ]
            }
        },
        components: {
            vLabel
        },
        computed: {
            ...mapState('title', {
                title: s => s.title,
                data: s => s.data,
                subtitle: s => s.subtitle,
                labels: s => s.labels,
                backgroundUrl: s => s.backgroundUrl
            })
        }
    }
</script>

