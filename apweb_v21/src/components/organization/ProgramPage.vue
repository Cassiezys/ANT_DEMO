<template>
  <div>
    <DemoHeader></DemoHeader>
    <ProgramContent></ProgramContent>
    <router-view/>
  </div>
</template>

<script>
import DemoHeader from "@/components/DemoHeader";
import ProgramContent from "@/components/organization/ProgramContent";
export default {
  name: "Program",
  components: {ProgramContent, DemoHeader}
}
</script>

<style scoped>

</style>