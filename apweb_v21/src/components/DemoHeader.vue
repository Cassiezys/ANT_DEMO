<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <a-row>
          <!-- 左边的LOGO -->
          <a-col :span="4">
            <img alt="Vue logo" class="apweb-logo" src="../assets/logo.png">
          </a-col>
          <!-- 导航列表-->
          <a-col :span="20">
            <a-menu v-model="current" mode="horizontal">
              <a-menu-item key="mail"> <a-icon type="mail" />HOME</a-menu-item>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper"><a-icon type="setting"/>PARTICIPATING</span>
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
                <span slot="title" class="submenu-title-wrapper"><a-icon type="setting"/>PROGRAM</span>
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
                <span slot="title" class="submenu-title-wrapper"><a-icon type="setting"/>SUBMISSION</span>
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
                <span slot="title" class="submenu-title-wrapper"><a-icon type="setting"/>ORGANIZATION</span>
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
              <a-menu-item key="mail"> <a-icon type="mail" />WORKSHOPS</a-menu-item>
              <a-menu-item key="mail"> <a-icon type="mail" />PREVIOUS CONFERENCES</a-menu-item>
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
      current: ['mail'],
    };
  },
}
</script>

<style scoped>
.apweb-logo{
  width: 100px;
}
</style>