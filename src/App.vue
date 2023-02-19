<template>
  <hr />
  <test-sea>
    <div>1111111</div>
    <h2>H22222222</h2>
  </test-sea>
  <hr />
  <test-component />
  <hr />
  Vue3 Template
  <H2>ejs动态渲染模板: test-project1.0.8</H2>
  <hr />
  <div>
    <span><router-link to="/home">主  页 | </router-link></span>
    <span><router-link to="/order">订 单 | </router-link></span>
    <span><router-link to="/my">个人中心</router-link></span>
  </div>
  <hr />
  <button @click="jump">jump</button>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  setup() {
    const router = useRouter();
    return {
      jump() {
        router.push('/order');
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
