import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomePage.vue'
import Previous from './components/previousConferences/PreviousPage'
import Organizing from './components/organization/OrganizingPage'
import Program from './components/organization/ProgramPage'
import Workshops from './components/workshops/WorkshopsPage'
import Program_tutorial from "./components/program/Tutorial"
import Program_keynote_speech from "./components/program/KeynoteSpeeches"
import Program_overview from "./components/program/Overview"
import Program_sessions from "./components/program/Sessions"
import Program_proceedings from "./components/program/Proceedings"

import Submission_submissions from "./components/submission/Submissions"
import Submission_call_for_papers from "./components/submission/CallForPapers"
import Submission_call_for_demo_papers from "./components/submission/CallForDemoPapers"
import Submission_call_for_workshops from "./components/submission/CallForWorkshops"
import Submission_call_for_tutorials from "./components/submission/CallForTutorials"
import Submission_camera_ready_instruction from "./components/submission/CameraReadyInstruction"
import Participating_registration from "./components/participating/Registration"
import Participating_venue from "./components/participating/Venue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/previous',
      name: 'previous',
      component: Previous,
    },
    {
      path: '/organizing_committee',
      name: 'organizing',
      component: Organizing,
    },
    {
      path: '/program_committee',
      name: 'program',
      component: Program,
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: Workshops,
    },
    {
      path: '/program/tutorial',
      name: 'program_tutorial',
      component: Program_tutorial,
    },
    {
      path: '/program/keynote_speech',
      name: 'program_keynote_speech',
      component: Program_keynote_speech,
    },
    {
      path: '/program/overview',
      name: 'program_overview',
      component: Program_overview,
    },
    {
      path: '/program/sessions',
      name: 'program_sessions',
      component: Program_sessions,
    },
    {
      path: '/program/proceedings',
      name: 'program_proceedings',
      component: Program_proceedings,
    },
    {
      path: '/submission/CallForPapers',
      name: 'submission_call_for_papers',
      component: Submission_call_for_papers,
    },
    {
      path: '/submission/CallForDemoPapers',
      name: 'submission_call_for_demo_papers',
      component: Submission_call_for_demo_papers,
    },
    {
      path: '/submission/CallForTutorials',
      name: 'submission_call_for_tutorials',
      component: Submission_call_for_tutorials,
    },
    {
      path: '/submission/CallForWorkshops',
      name: 'submission_call_for_workshops',
      component: Submission_call_for_workshops,
    },
    {
      path: '/submission/Submissions',
      name: 'submission_submissions',
      component: Submission_submissions,
    },
    {
      path: '/submission/CameraReadyInstruction',
      name: 'submission_camera_ready_instruction',
      component: Submission_camera_ready_instruction,
    },
    {
      path: '/participating/Registration',
      name: 'participating_registration',
      component: Participating_registration,
    },
    {
      path: '/participating/Venue',
      name: '/participating_venue',
      component: Participating_venue,
    }
  ]
})
