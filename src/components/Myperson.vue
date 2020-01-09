<template>
  <div>
  	<h1>{{ $route.params.id }}</h1>
    <h2 @click="aaa" >点击方法测试</h2>
    <h2 @click="bbb" >点击方法测试-Vue全局</h2>
  </div>
</template>

<script>

export default {
  data(){
    return {
    }
  },
  methods: {
    aaa:() => {
      console.log(123);
      console.log(this);
      // 该定义函数的方法是错误的，this 将没有值
    },
    bbb() {
      this.test();
      console.log(this);
    }

  }
};
</script>

<style>
h5{
	margin-bottom: 0rem;
}
</style>