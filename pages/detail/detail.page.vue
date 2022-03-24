<template>
  <div class="detail-page-main">
    <div>
      <h1>详情</h1>
      <n-button @click="click">去about页面</n-button>
    </div>
    <div>
      <n-button @click="clickM">去movies页面</n-button>
    </div>
    <div>
      <n-button @click="navigate('/messageboard', { keepScrollPosition: true })">留言板</n-button>
    </div>
    <p>{{ detail.data.detail_title }}</p>
    <p>{{ detail.data.detail_type }}</p>
    <img :src="detail.data.detail_image" alt />
    <p>{{ detail.data.detail_description.split('【下载地址】')[0] }}</p>
    <n-list>
      <n-list-item v-for="item in download" :key="item">
        下载：
        <a :href="item" target="_black" style="color:red">{{ detail.data.detail_title }}</a>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup>
import Counter from './Counter.vue'
import { ref } from 'vue'
import { navigate } from "vite-plugin-ssr/client/router";
const props = defineProps({
  detail: {
    type: Object,
    default() {
      return {}
    }
  }
})
const download = props.detail.data.detail_download.split('href="').filter(i => i)
const click = () => {
  // 临时解决的js跳转
  navigate('/about', { keepScrollPosition: true })
}
const clickM = () => {
  navigate('/movies/1', { keepScrollPosition: true })
}
const dowoloadurl = (item) => {
  return item.split('\"')[0]
}
</script>
<style lang="scss" scoped>
.detail-page-main {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
