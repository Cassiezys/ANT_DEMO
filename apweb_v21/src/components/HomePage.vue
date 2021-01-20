<template>
  <div>
    <DemoHeader></DemoHeader>
    <router-view/>
    <HomeContent></HomeContent>
    <DemoFooter></DemoFooter>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import HomeContent from "@/components/HomeContent";
export default {
  name: "HomePage",
  components: {HomeContent, DemoFooter, DemoHeader}
}
</script>

<style scoped>

</style>