<template>
    <div>
        <h3>当前是子组件
            <br>父组件传的属性值:{{ toson }}
        </h3>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return { 
            
        }
    },
    props: ["toson"],
    beforeRouteEnter (to, from, next) {
        // 因为没有直接调用子组件，所以该守卫不会运行。
        console.log("子组件的路由守卫");
        next();
    }
}
</script>
<style lang='less' scoped>

</style>