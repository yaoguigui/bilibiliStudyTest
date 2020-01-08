<template>
  <div>
  	<van-nav-bar
  	title="标题"
  	left-text="返回"
  	left-arrow
  	@click-left="onClickLeft"
  	>
  	<h5 name="search" slot="right">123</h5>
  </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  id: 'header',
  data(){
    return {
      active: 3,
      activeName: "c"
    }
  },
  methods: {
  	onClickLeft() {
  		alert(1);
  	},
  	onClickRight() {
  		alert(2);
  	}
  }
};
</script>

<style>
h5{
	margin-bottom: 0rem;
}
</style>