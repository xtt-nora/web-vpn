<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <iframe
          src="/static/note.html"
          style="width: 100%; height: 100%"
          name="iframe_a"
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
        ></iframe>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Web-Vpn</h2>
        </div>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="企业微信" name="first">
            <div id="qr_login" style="height: 400px; width: 400px"></div>
          </el-tab-pane>
          <el-tab-pane label="账号密码" name="second">
            <LoginForm />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from './components/LoginForm.vue'
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import * as ww from '@wecom/jssdk'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
onMounted(() => {
  const wwLogin = ww.createWWLoginPanel({
    el: '#qr_login',
    params: {
      appid: '',
      agentid: '',
      redirect_uri: ``,
      state: 'state',
      redirect_type: 'callback'
    },
    onCheckWeComLogin({ isWeComLogin }) {
      console.log(isWeComLogin)
    },
    onLoginSuccess({ code }) {
      console.log({ code })
    },
    onLoginFail(err) {
      console.log(err)
    }
  })
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
