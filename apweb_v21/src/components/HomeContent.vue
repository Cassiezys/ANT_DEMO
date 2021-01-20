<template>
  <div id="components-layout-demo-basic">
    <!-- 轮播图片-->
    <a-layout>
      <a-layout-content>
        <a-carousel autoplay>
          <div class="apweb-img"><h3>1</h3></div>
          <div class="apweb-img"><h3>2</h3></div>
          <div class="apweb-img"><h3>3</h3></div>
          <div class="apweb-img"><h3>4</h3></div>
        </a-carousel>
      </a-layout-content>
    </a-layout>
    <!-- KEYNOTE TALKS-->
    <div class="talks">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="6">
            col-6
          </a-col>
          <a-col :span="6">
            col-6
          </a-col>
          <a-col :span="6">
            col-6
          </a-col>
          <a-col :span="6">
            col-6
          </a-col>
        </a-row>
    </div>
    <!--Introduction-->
    <div class="introduction">
      <h1>Brief Introduction</h1>
      <p>{{msg}}</p>
    </div>
    <!--IMPORTANT DATES-->
    <div class="dates">
      <h1>IMPORTANT DATES</h1>
      <ul>
        <li>Abstract submission: February 9, 2020 February 29, 2020 (PST)</li>
        <li>Abstract submission: February 9, 2020 February 29, 2020 (PST)</li>
        <li>Abstract submission: February 9, 2020 February 29, 2020 (PST)</li>
      </ul>
    </div>
    <!--ORGANIZATION INSTITUTIONS-->
    <div class="organization">
      <h1>ORGANIZATION INSTITUTIONS</h1>
      <img src="../assets/logo.png" alt="">
    </div>
    <!-- Contact us-->
    <div class="contact">
      <h1>contact US</h1>
      <p>Email: {{email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  data(){
    return {
      msg:'APWeb and WAIM are two separated leading international conferences on research, development and applications of Web technologies and database systems. Starting in 2017, the two conference committees have agreed to launch a joint conference. With the increased focus on Big Data, the new joint conference is expected to attract more professionals from different industrial and academic communities, not only from the Asia Pacific countries but also from other continents. The first APWeb-WAIM joint conference on Web and Big Data 2017 was held in Beijing, China. In 2018, it will take place in Macau, a beautiful city where East meets West and traditional Chinese culture has assimilated Western ways to create a unique cultural mix.',
      email: 'xxx@xx.com'
    }
  }
}
</script>

<style scoped>
.apweb-img{
  height: 200px;
}
.talks{
  margin: 0 100px ;
  height: 200px;
}
.introduction{
  background: #7dbcea;
  padding: 10px 200px;
  font-size: 20px;
  text-align: left;
}
.introduction p{/*
  font-size: 1.2em;
  font-weight: 100;
  width: 1000px;
  color: white;
  letter-spacing: 1.1px;*/
}
.dates{
  padding: 10px 200px;
  font-size: 20px;
  text-align: left;
}
</style>