<template>
  <div>
    <DemoHeader></DemoHeader>
    <div class="title">
		<img class="icon" src="../../assets/icon.jpg">
		<div>Venue</div>
	</div>
    <div class="content">
    
    </div>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
export default {
  name: "Venue",
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