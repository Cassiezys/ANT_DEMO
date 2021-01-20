<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <a-row type="flex" justify="space-around" align="middle">
          <!-- 左边的LOGO -->
          <a-col :span="4">
            <img alt="Vue logo" class="apweb-logo" src="../assets/logo.png">
          </a-col>
          <!-- 导航列表-->
          <a-col :span="20">
            <a-menu v-model="current" class="menu" mode="horizontal">
              <a-menu-item key="HOME"> <a-icon type="home" />HOME</a-menu-item>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">PARTICIPATING<a-icon type="caret-down" /></span>
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    Option 2
                  </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="setting:4">
                    Option 4
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">PROGRAM<a-icon type="caret-down" /></span>
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    Option 2
                  </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="setting:4">
                    Option 4
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">SUBMISSION<a-icon type="caret-down" /></span>
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    Option 2
                  </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="setting:4">
                    Option 4
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">>ORGANIZATION<a-icon type="caret-down" /></span>
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    Option 2
                  </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="setting:4">
                    Option 4
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-menu-item key="WORKSHOPS"> <a-icon type="profile" />WORKSHOPS</a-menu-item>
              <a-menu-item key="PREVIOUS CONFERENCES"> <a-icon type="history" />PREVIOUS CONFERENCES</a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'DemoHeader',
  props: {
    msg: String
  },
  data() {
    return {
      current: ['HOME'],
    };
  },
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
  height: 100px;
}
#components-layout-demo-basic .ant-layout-header{
  background: #ffffff;
  color: #fff;
}
.apweb-logo{
  width: 100px;
}
.menu{
  float: right;
}
</style>