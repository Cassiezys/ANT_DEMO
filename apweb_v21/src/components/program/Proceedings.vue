<template>
  <div>
    <DemoHeader></DemoHeader>
    <router-view/>
	<div class="title">
		<img class="icon" src="../../assets/logo.png">
		<div>Proceedings</div>
	</div>
	<div class="content">
			<div class="info black" style="font-weight: 800; line-height: 27px; margin-bottom: 15px;">The proceedings of APWeb-WAIM 2021 main conference are free to access for the period **July XX to August XX, 20XX**.</div>
			<br>

			<div class="info black" style="font-weight: 400; line-height: 22px; margin-bottom: 8px;">Click the links below for access.</div>

			<a class="venue red" style="color: blue; line-height: 22px;" href="https://www.baidu.com">Conference Proceedings Part</a>

			<br>

			<div class="info black" style="font-weight: 800; line-height: 23px; margin-top: 15px;">The papers presented at APWeb-WAIM 2019 workshops (KGMA and ESEA) will be published in a volume of post-proceedings by Springer LNCS after the conference.</div>
	</div>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
export default {
  name: "Proceedings",
  components: {DemoFooter, DemoHeader}
}
</script>

<style scoped>

.content{
	width: 1200px;
	margin:0 auto;
	text-align: left;
}
.icon{
	width: 100px;
}
.pad-33-em {
	padding: .33em 0;
	font-size: 18px;
	font-weight: bold;
}
.title {
	font-size:26px;
	color:#2db2ffff;
}
</style>