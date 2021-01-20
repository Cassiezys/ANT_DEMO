<template>
  <div>
    <DemoHeader></DemoHeader>
    <router-view/>
	<div class="title">
		<img class="icon" src="../../assets/logo.png">
		<div>Overview</div>
	</div>
	<div class="content">
		<img src="../../assets/A.png">
	</div>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
export default {
  name: "Overview",
  components: {DemoFooter, DemoHeader}
}
</script>

<style scoped>

.content{
	width: 920px;
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