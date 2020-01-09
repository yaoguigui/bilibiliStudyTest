<template>
  <div id="app">
    <v-header></v-header>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 路由跳转，组件不会被销毁 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- <router-view/> -->
    
    <van-tabbar v-model="active">
      <van-tabbar-item name="index" icon="like" to="/">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="closed-eye" to="/hello?msg=HelloWorld">哈喽</van-tabbar-item> -->
      <van-tabbar-item :icon="active==1?'circle':'closed-eye'" :to="{ path: '/hello', query: { msg:'HelloQuery'}}" :my-data=active>哈喽</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/myperson/id321">个人中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/myset">设置</van-tabbar-item>
    </van-tabbar>

<!--     <van-number-keyboard safe-area-inset-bottom /> -->

  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data(){
    return {
      active: 1 ,
      activeName: "index"
    }
  },
  components: {
    vHeader: Header
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding-bottom: 50px;
}
</style>