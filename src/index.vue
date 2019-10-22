<template>
  <div class="component">
    Hello Christina!
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'maliang-component-demo',
    label: process.env.LABEL,
    style: process.env.STYLE,
    props: {
    },
    computed: {
    },
    editorMethods: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component {
    color: red;
    font-size: 20px;
    font-weight: 600;
    text-align center;
    padding: 20px;
  }
</style>
