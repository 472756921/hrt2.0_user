import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//功能页面
import home from '@/page/option/home'
import phone from '@/page/option/phone/phone'
import phone_history from '@/page/option/phone/history'
import face from '@/page/option/face/face'
import face_history from '@/page/option/face/history'
import video from '@/page/option/video/video'
import video_history from '@/page/option/video/history'
import mt from '@/page/option/mt/mt'
import mt_history from '@/page/option/mt/history'
import question from '@/page/option/question/question'
import q_conversation from '@/page/option/question/q_conversation'
import q_history from '@/page/option/question/history'
import teamShow from '@/page/option/teamShow'

import service_agreement from '@/page/service_agreement'
import addTeam from '@/page/option/addTeam'
import payChooes from '@/page/option/payChooes'

//文章详情
import datile from '@/page/ad/datile'
import teamList from '@/page/teamList'

//user center
import center from '@/page/user/center'
import userData from '@/page/user/userdata'
import userAD from '@/page/user/userAD'
import userHData from '@/page/user/userHData'
import dev from '@/page/user/cloud/dev'
import healthData from '@/page/user/healthData/healthData'
import dataImg from '@/page/user/healthData/dataImg'
import file from '@/page/user/healthData/file'
import LeaveHospital from '@/page/user/healthData/document/LeaveHospital'
import KeyIndicators from '@/page/user/healthData/document/KeyIndicators'
import HealthNeeds from '@/page/user/healthData/document/HealthNeeds'
import HealthReport from '@/page/user/healthData/document/HealthReport'

import userShop from '@/page/user/shop/userShop'
import recharge from '@/page/user/recharge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/teamShow',
      name: 'teamShow',
      component: teamShow
    },
    {
      path: '/:teamID/phone',
      name: 'phone',
      component: phone
    },
    {
      path: '/:teamID/phone_history',
      name: 'phone_history',
      component: phone_history
    },
    {
      path: '/:teamID/face',
      name: 'face',
      component: face
    },
    {
      path: '/:teamID/face_history',
      name: 'face_history',
      component: face_history
    },
    {
      path: '/:teamID/video',
      name: 'video',
      component: video
    },
    {
      path: '/:teamID/video_history',
      name: 'video_history',
      component: video_history
    },
    {
      path: '/:teamID/mt',
      name: 'mt',
      component: mt
    },
    {
      path: '/:teamID/mt_history',
      name: 'mt_history',
      component: mt_history
    },
    {
      path: '/:teamID/question',
      name: 'question',
      component: question
    },
    {
      path: '/:teamID/q_conversation',
      name: 'q_conversation',
      component: q_conversation
    },
    {
      path: '/:teamID/q_history',
      name: 'q_history',
      component: q_history
    },
    {
      path: '/payChooes',
      name: 'payChooes',
      component: payChooes
    },
    {
      path: '/service_agreement',
      name: 'service_agreement',
      component: service_agreement
    },
    {
      path: '/:id/addTeam',
      name: 'addTeam',
      component: addTeam
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/userData',
      name: 'userData',
      component: userData
    },
    {
      path: '/userAD',
      name: 'userAD',
      component: userAD
    },
    {
      path: '/userHData',
      name: 'userHData',
      component: userHData
    },
    {
      path: '/dev',
      name: 'dev',
      component: dev
    },
    {
      path: '/healthData',
      name: 'healthData',
      component: healthData
    },
    {
      path: '/dataImg',
      name: 'dataImg',
      component: dataImg
    },
    {
      path: '/file',
      name: 'file',
      component: file
    },
    {
      path: '/userShop',
      name: 'userShop',
      component: userShop
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/datile',
      name: 'datile',
      component: datile
    },
    {
      path: '/LeaveHospital',
      name: 'LeaveHospital',
      component: LeaveHospital
    },
    {
      path: '/KeyIndicators',
      name: 'KeyIndicators',
      component: KeyIndicators
    },
    {
      path: '/HealthReport',
      name: 'HealthReport',
      component: HealthReport
    },
    {
      path: '/HealthNeeds',
      name: 'HealthNeeds',
      component: HealthNeeds
    },
    {
      path: '/teamList',
      name: 'teamList',
      component: teamList
    },
  ]
})
