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
              <a-menu-item key="HOME"> <a href="/"><a-icon type="home" />
                HOME</a></a-menu-item>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">PARTICIPATING<a-icon type="caret-down" /></span>
                  <a-menu-item key="registration">
                    <a href="/participating/registration">
                    Registration
                    </a>
                  </a-menu-item>
                  <a-menu-item key="venue">
                    <a href="/participating/venue">
                    Venue
                    </a>
                  </a-menu-item>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">PROGRAM<a-icon type="caret-down" /></span>
                <a-menu-item key="tutorial">
                    <a href="/program/tutorial">
                      Tutorial
                    </a>
                </a-menu-item>

                <a-menu-item key="keynote_speech">
                    <a href="/program/keynote_speech">
                      Keynote Speeches
                    </a>
                </a-menu-item>

                <a-menu-item key="overview">
                    <a href="/program/overview">
                      Overview
                    </a>
                </a-menu-item>

                <a-menu-item key="sessions">
                    <a href="/program/sessions">
                      Sessions
                    </a>
                </a-menu-item>

                <a-menu-item key="proceedings">
                    <a href="/program/proceedings">
                      Proceedings
                    </a>
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">SUBMISSION<a-icon type="caret-down" /></span>
                <a-menu-item key="call_for_papers">
                    <a href="/submission/CallForPapers">
                      Call For Papers
                    </a>
                </a-menu-item>

                <a-menu-item key="call_for_demo_papers">
                    <a href="/submission/CallForDemoPapers">
                      Call For Demo Papers
                    </a>
                </a-menu-item>

                <a-menu-item key="call_for_workshops">
                    <a href="/submission/CallForWorkshops">
                      Call For Workshops
                    </a>
                </a-menu-item>

                <a-menu-item key="call_for_tutorials">
                    <a href="/submission/CallForTutorials">
                      Call For Tutorials
                    </a>
                </a-menu-item>

                <a-menu-item key="submission">
                    <a href="/submission/Submissions">
                      Submission
                    </a>
                </a-menu-item>
                <a-menu-item key="camera_ready_instruction">
                  <a href="/submission/CameraReadyInstruction">
                    Camera Ready Instruction
                  </a>
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper">ORGANIZATION<a-icon type="caret-down" /></span>
                  <a-menu-item key="setting:1">
                    <a href="/organizing_committee">Organizing Committee</a>
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    <a href="/program_committee">Program Committee</a>
                  </a-menu-item>
              </a-sub-menu>
              <a-menu-item key="WORKSHOPS"><a href="/workshops"><a-icon type="profile" />WORKSHOPS</a></a-menu-item>
              <a-menu-item key="PREVIOUS CONFERENCES"><a href="/previous">
                <a-icon type="history" />PREVIOUS CONFERENCES</a></a-menu-item>
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