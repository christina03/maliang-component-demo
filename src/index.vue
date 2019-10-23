<template>
  <div class="component">
    Hello, christina!
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
    font-weight: 500;
    text-align: center;
    padding: 20px;
  }
</style>
