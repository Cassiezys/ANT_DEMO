<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <div class="head">
          <h1>{{ title }}</h1>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content">
          <h2>
            <a href="https://kgma2020.github.io/">
            <span style="color:#2e75b6">The Third International Workshop on Knowledge Graph Management and Applications (KGMA 2020)
            </span>
          </a></h2>
          <h2>
            <a href="http://semibdma2020.lnu.edu.cn/">
            <span style="color:#2e75b6">The Second International Workshop on Semi-structured Big Data Management and Applications (SemiBDMA 2020)
            </span>
            </a>
          </h2>
          <h2>
            <a href="https://deepluda.github.io/">
            <span style="color:#2e75b6">The 1st International Workshop on Deep Learning in Large-scale Unstructured Data Analytics (DeepLUDA 2020)
            </span>
            </a>
          </h2>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "WorkshopsContent",
  data() {
    return {
      title: 'Workshops'
    }
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: left;
}

#components-layout-demo-basic .ant-layout-header {
  padding: 20px 0 0 0;
  background: #ffffff;
  height: 200px;
}

#components-layout-demo-basic .ant-layout-header h1 {
  font-size: 2em;
  font-weight: 200;
  text-align: center;
  padding: 20px;
  /* padding-top: 30px; */
  /* padding-bottom: 30px; */
  color: white
}

#components-layout-demo-basic .ant-layout-header .head {
  text-align: center;
  line-height: 140px;
  background: #7dbcea;
}

#components-layout-demo-basic .ant-layout-content {
  background: #ffffff;
  padding: 0 420px;
}
#components-layout-demo-basic .ant-layout-content h2{
  font-size: 1.2em;
  line-height: 200%;
  font-weight: 100;
  padding-top: 5px;
  /* padding-bottom: 10px; */
  margin: 0;
  color: #013863;
  text-align: justify;
}
</style>