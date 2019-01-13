<template>
    <div v-html="parseHTML">
    </div>
</template>

<script>
    import markdownIt from 'markdown-it'
    import emoji from 'markdown-it-emoji'
    import subscript from 'markdown-it-sub'
    import superscript from 'markdown-it-sup'
    import footnote from 'markdown-it-footnote'
    import deflist from 'markdown-it-deflist'
    import abbreviation from 'markdown-it-abbr'
    import insert from 'markdown-it-ins'
    import mark from 'markdown-it-mark'
    import toc from 'markdown-it-toc-and-anchor'
    import katex from 'markdown-it-katex'
    import tasklists from 'markdown-it-task-lists'
    import hljs from 'highlightjs'
    import 'highlightjs/styles/androidstudio.css'

    export default {
        name: "markdown",
        props: {
            sourceData: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                md: ''
            }
        },
        computed: {
            parseHTML() {
                return this.md.render(this.sourceData)
            }
        },
        created() {
            this.md = new markdownIt();

            this.md.use(subscript)
                .use(superscript)
                .use(footnote)
                .use(deflist)
                .use(abbreviation)
                .use(insert)
                .use(mark)
                .use(emoji)
                .use(katex, {'throwOnError': false, 'errorColor': ' #cc0000'})
                .use(tasklists, {enabled: this.taskLists});

            this.md.set({
                html: true,
                xhtmlOut: true,
                breaks: true,
                linkify: true,
                typographer: true,
                langPrefix: 'language-',
                quotes: '“”‘’',
                highlight(str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre class="hljs"><code>' +
                                hljs.highlight(lang, str, true).value +
                                '</code></pre>'
                        } catch (__) {
                        }
                        return '<pre class="hljs"><code>' + this.md.utils.escapeHtml(str) + '</code></pre>'
                    }
                }
            })
        }
    }
</script>

<style scoped>

</style>
