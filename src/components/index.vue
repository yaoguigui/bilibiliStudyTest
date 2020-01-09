<template>
  <div>
    <h1>
      首页
      <van-icon name="chat" dot />
    </h1>
    <van-icon name="close" />
    <van-icon name="close" info="9" />
    <son-com toson="父组件的值"></son-com>
  </div>
</template>

<script>
import SonCom from "./SonCom";

export default {
  data() {
    return {};
  },
  components: {
    SonCom
  },
  beforeRouteEnter(to, from, next) {
    console.log("Index-组件的路由守卫");  
    next();
  },
  destroyed() {
    console.log("index-组件被销毁")
  },
  activated() {
    // 需要使用 keep-alive 才会执行该函数
    console.log("当组件处于活跃时")
  },
  deactivated() {
    // 需要使用 keep-alive 才会执行该函数
    console.log("当组件处于不活跃状态");
    
  }
};
</script>

<style>
h5 {
  margin-bottom: 0rem;
}
</style>