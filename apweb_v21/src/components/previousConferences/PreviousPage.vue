<template>
  <div>
    <DemoHeader></DemoHeader>
    <previous-conferences></previous-conferences>
    <router-view/>
  </div>
</template>

<script>
import PreviousConferences from "@/components/previousConferences/PreviousConferences";
import DemoHeader from "@/components/DemoHeader";
export default {
  name: "PreviousPage",
  components: {DemoHeader, PreviousConferences}
}
</script>

<style scoped>

</style>