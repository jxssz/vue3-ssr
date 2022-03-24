<template>
  <h1>关于</h1>
  <n-button @click="click">返回首页</n-button>
  <n-button @click="navigate('/messageboard', { keepScrollPosition: true })">留言板</n-button>
  <p>A page.</p>
  <n-list>
    <n-list-item v-for="item in users" :key="item">{{ item.name }}</n-list-item>
  </n-list>
  <!-- <span>用户：{{ props.routeParams.id }}</span>
  <br />
  <span>用户id：{{ props.routeParams.cid }}</span>-->
</template>

<style>
h1,
p {
  /* color: green; */
}
</style>
<script setup>
import { ref } from 'vue'
import { router } from '@/util/route'
import { navigate } from "vite-plugin-ssr/client/router";
const props = defineProps({
  routeParams: {
    type: Object,
    default() {
      return {}
    }
  },

  users: {
    type: Array,
    default() {
      return []
    }
  },
})
const click = () => {
  navigate('/', { keepScrollPosition: true })
}
</script>
