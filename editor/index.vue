<template>
  <div class="property-box">
    <div class="property-box__base">
      <div class="property-box__base-title">基础信息</div>
      <div class="property-box__base-item">
        <label>唯一id</label>
        <el-input class="input-box" v-model="id" placeholder="请输入内容" :disabled="true"></el-input>
      </div>
      <div class="property-box__base-item">
        <label>名称</label>
        <el-input class="input-box" v-model="name" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="property-box__base">
      <div class="property-box__base-title">属性设置</div>
      <div class="property-box__base-item">
        <label>测试项</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in optionsList" :key="item.key" :label="item.text" :value="item.key"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'maliangeditor',
    props: {
      componentInfo: { // 固定字段，收集所有属性值
        type: [Object],
        default () {
          return {
          }
        }
      }
    },
    data: function () {
      return {
        optionsList: [
          {
            key: 'one',
            text: '选项一'
          },
          {
            key: 'two',
            text: '选项二'
          },
          {
            key: 'three',
            text: '选项三'
          },
          {
            key: 'four',
            text: '选项四'
          }
        ],
        value: '',
        id: 'testId',
        name: '测试'
      }
    },
    computed: {
    },
    watch: {
      componentInfo: {
        hanlder: function (v) {
          console.log('editor index', v)
        },
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .property-box {
    &__base{
      margin-top: 20px;
      &-item{
        display: flex;
        margin: 10px 0;
        align-items: center;
        &-title{
          font-size: 18px;
        }
        label{
          min-width: 100px;
          font-size: 14px;
        }
        .input-box{
          width: 193px;
        }
      }
    }

  }
</style>
