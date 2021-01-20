<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <h1>{{ msg }}</h1>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'DemoFooter',
  data(){
    return {
      msg:'©2021 APWeb-WAIM Joint Conference on Web and Big Data'
    }
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
  height: 100px;
}
#components-layout-demo-basic .ant-layout-header{
  background: #7dbcea;
  color: #fff;
}
</style>