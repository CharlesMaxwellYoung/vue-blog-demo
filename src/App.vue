<template>
    <div id="app">
        <v-header/>
        <router-view/>
        <v-footer/>
    </div>
</template>

<script>
    import vHeader from '@/layout/header.vue'
    import vFooter from '@/layout/footer.vue'

    export default {
        name: 'app',
        components: {
            vHeader,
            vFooter
        }
    }
</script>
<style lang="scss">

    // 1. Configuration and helpers
    @import "./assets/abstracts/variables",
    "./assets/abstracts/mixins";
    // 2. Vendors
    @import "./assets/vendor/normalize";
    // 3. Base
    @import "./assets/base/base",
    "./assets/base/typography",
    "./assets/base/helpers";
    // 4. Layout
    @import "./assets/layout/grid",
    "./assets/layout/nav",
    "./assets/layout/footer";
    // 5. Components
    @import "./assets/components/btn",
    "./assets/components/card",
    "./assets/components/label",
    "./assets/components/pagination",
    "./assets/components/form",
    "./assets/components/modal",
    "./assets/components/table",
    "./assets/components/syntax";
    // 6. Page-specific styles
    @import "./assets/pages/page",
    "./assets/pages/post";

</style>
