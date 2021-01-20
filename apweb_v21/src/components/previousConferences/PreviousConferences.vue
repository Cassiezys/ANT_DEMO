<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <div class="head">
          <h1>{{title}}</h1>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content">
          <h2><b>APWeb-WAIM (Asia Pacific Web and Web-Age Information Management Joint Conference on Web and Big Data)</b></h2>
          <h2><a href="#">2017</a></h2>
          <h2><b>APWeb (Asia Pacific Web Conference)APWeb (Asia Pacific Web Conference)</b></h2>
          <h2>
            <a href="#">2017</a>
            <a href="#">2017</a>
            <a href="#">2017</a>
            <a href="#">2017</a>
          </h2>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "PreviousConferences",
  data(){
    return {
      title: 'PREVIOUS CONFERENCES'
    }
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header{
  padding: 20px 0 0 0;
  background: #ffffff;
  height: 200px;
}
#components-layout-demo-basic .ant-layout-header h1{
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
#components-layout-demo-basic .ant-layout-content h2 b{
  font-size: 1em;
  line-height: 200%;
  font-weight: 500;
  padding-top: 20px;
  color: #013863;
}
#components-layout-demo-basic .ant-layout-content h2 a{
  color: red!important;
  padding-right: 10px;
}
a {
  text-decoration: none;
}
</style>