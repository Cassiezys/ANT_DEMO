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
          <h1>Organization Committee</h1>
          <h2>Honorary Chair</h2>Lionel Ni (University of Macau)
          <h2>General Co-Chairs</h2>Zhiguo Gong (University of Macau)<br>
          Qing Li (City University of Hong Kong, HK)<br>
          Kam-fai Wong (Chinese University of Hong Kong, HK)
          <h2>PC Co-Chairs</h2>Yi Cai (South China University of Technology, China)<br>
          Yoshiharu Ishikawa (Nagoya U Furo-cho, Japan)<br>
          Jianliang Xu (Hong&nbsp;Kong&nbsp;Baptist University, HK)
          <h2>Workshop Chairs</h2>Leong Hou U (University of Macau)<br>
          Haoran Xie (Education University of Hong Kong, HK)
          <h2>Tutorial Chair</h2>Jian Yang (Macquire University, Australia)
          <h2>Industry Chair</h2>Wenyin Liu (Guangdong University of Technology, China)
          <h2>Panel Chair</h2>Kamal Karlapalem (IIIT, Hyderabad, India)
          <h2>Publicity Co-Chairs</h2>An Liu (Soochow University, China)<br>
          Feifei Li (University of Utah, USA)<br>
          Wen-Chih Peng (National Taiwan University, Taiwan)<br>
          Ladjel Bellatreche (ISAE-ENSMA, Poitiers, France)
          <h2>Treasurer</h2>Leong Hou U (University of Macau)<br>
          Andrew Shibo Jiang (Macau Convention &amp; Exhibition Association, Macau)
          <h2>Local Arrangement Chair</h2>Derek Fai Wong (University of Macau)
          <h2>Webmaster</h2>William Sio (University of Macau)
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "OrganizingContent",
  data(){
    return {
      title: 'Orginazing Committee'
    }
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: left;
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
</style>