import Vue from 'vue';
import vueRouter from 'vue-router'

Vue.use(vueRouter);

// import index from "../components/index.vue"
// import hello from "../components/HelloWorld.vue"
// import myperson from "../components/Myperson.vue"
const index = () => import('../components/index.vue')
const hello = () => import('../components/HelloWorld.vue')
const myperson = () => import('../components/Myperson.vue')
const myset = () => import('../components/MySet.vue')

const router = new vueRouter({
	routes: [
	{ path: "/", component: index},
	{ path: "/hello", component: hello},
    { path: "/myperson/:id", component: myperson},
    { path: "/myset", component: myset, children: [{
        path: "name",
        component: name

    }]}
	]
})

export default router;