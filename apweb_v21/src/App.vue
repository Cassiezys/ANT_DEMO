<template>
  <div id="app">
    <DemoHeader msg="Welcome to ALWEB"/>
    <DemoFooter msg="©2019 APWeb-WAIM Joint Conference on Web and Big Data"/>
    <a-button type="primary">Button</a-button>
  </div>
</template>

<script>
import DemoFooter from "@/components/DemoFooter";
import DemoHeader from "@/components/DemoHeader";

export default {
  name: 'app',
  components: {
    DemoHeader,
    DemoFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
