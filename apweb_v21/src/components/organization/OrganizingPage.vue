<template>
  <div>
    <DemoHeader></DemoHeader>
    <OrganizingContent></OrganizingContent>
    <router-view/>
  </div>
</template>

<script>
import OrganizingContent from "@/components/organization/OrganizingContent";
import DemoHeader from "@/components/DemoHeader";
export default {
  name: "Organizing",
  components: {DemoHeader, OrganizingContent}
}
</script>

<style scoped>

</style>