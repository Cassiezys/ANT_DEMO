<template>
  <div>
    <DemoHeader></DemoHeader>
    <router-view/>
	<div class="title">
		<img class="icon" src="../../assets/icon.jpg">
		<div>Tutorial</div>
	</div>
	<div class="content">
		<a style="display: block;color: black;" name="content">
			<p class="pad-33-em">Keynote Speech I: Exploring Change</p>
			<p class="keynote-time-location pad-33-em">Time: 9:20-10:40, August 2, 2019</p>
			<p class="keynote-time-location pad-33-em mb20">Location: 2F Yinxing Hall</p>
			<img class="icon" style="width: 250px;" src="../../assets/logo.png">
			<p class="" style="font-size: 18px; font-style: italic; font-weight: bold;padding-bottom: 0.5em;padding-top: 0.5em;">Divesh Srivastava</p>

			<p class="pad">Head of Database Research, AT&amp;T Labs-Research</p><p>
			</p><p style="padding: 1em 0; font-size: 18px;">Abstract: </p>
			<p class="pad">Data and schema in datasets experience many different kinds of change. Values are inserted, deleted or updated; rows appear and disappear; columns are added or repurposed, and so on. In such a dynamic situation, users might wonder: How many changes have there been in the recent minutes, days or years? What kind of changes were made at which points of time?  How dirty is the data?  The fact that data changed can hint at different hidden processes: a frequently crowd-updated city name may be controversial; a person whose name has been recently changed may be the target of vandalism; and so on.   To interactively explore such changes, we present our DBChEx (Database Change Explorer) prototype system. Using two real-world datasets, IMDB and Wikipedia infoboxes, we illustrate how users can gain valuable insights into data generation processes and data or schema evolution over time by a mix of serendipity and guided investigation using DBChEx.  Finally, we identify a range of technical challenges that need to be addressed to fully realize our vision of change exploration.</p>


			<p class="pad">This is joint work with T. Bleifuß, L. Bornemann, T. Johnson, D. Kalashnikov and F. Naumann.</p><p>
			</p><p class="pad"><span style="font-style: italic;">Speaker Bio:</span> Divesh Srivastava is the Head of Database Research at AT&amp;T Labs-Research. He is a Fellow of the Association for Computing Machinery (ACM), the Vice President of the VLDB Endowment, on the ACM Publications Board and an associate editor of the ACM Transactions on Data Science (TDS).  He has served as the managing editor of the Proceedings of the VLDB Endowment (PVLDB), as associate editor of the ACM Transactions on Database Systems (TODS), and as associate Editor-in-Chief of the IEEE Transactions on Knowledge and Data Engineering (TKDE).  He has presented keynote talks at several international conferences, and his research interests and publications span a variety of topics in data management.  He received his Ph.D. from the University of Wisconsin, Madison, USA, and his Bachelor of Technology from the Indian Institute of Technology, Bombay, India.</p>
		</a>
	</div>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
export default {
  name: "Tutorial",
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