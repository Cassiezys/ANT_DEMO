<template>
  <div>
    <DemoHeader></DemoHeader>
    <WorkshopsContent></WorkshopsContent>
    <router-view/>
  </div>

</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import WorkshopsContent from "@/components/workshops/WorkshopsContent";
export default {
  name: "WorkshopsPage",
  components: {WorkshopsContent, DemoHeader}
}
</script>

<style scoped>

</style>