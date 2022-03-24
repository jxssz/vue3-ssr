<template>
  <div class="home-page-main">
    <div>
      <h1>首页</h1>
      <n-button @click="click">去about页面</n-button>
      <n-button @click="navigate('/messageboard', { keepScrollPosition: true })">留言板</n-button>
    </div>
    <n-list>
      <div class="more">
        <n-button size="small" type="success" @click="clickM">更多电影</n-button>
      </div>
      <n-list-item v-for="item in movie.list" :key="item">
        <h3 @click="godetail(item.mid)">{{ item.title }}</h3>
        <span>{{ item.time }}</span>
        <!-- <a :href="item.url" target="_blank">
          <n-button size="tiny" type="success">原始链接</n-button>
        </a>-->
        <p>{{ item.description }}</p>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup>
import Counter from './Counter.vue'
import { ref } from 'vue'
import { navigate } from "vite-plugin-ssr/client/router";
const props = defineProps({
  movie: {
    type: Object,
    default() {
      return {}
    }
  }
})
const click = () => {
  // 临时解决的js跳转
  navigate('/about', { keepScrollPosition: true })
}
const clickM = () => {
  navigate('/movies/1', { keepScrollPosition: false })
}
const godetail = (mid) => {
  navigate(`/detail/${mid}`, { keepScrollPosition: true })
}
</script>

<style lang="scss" scoped>
.home-page-main {
  h3 {
    cursor: pointer;
    &:hover {
      color: rgb(0, 133, 0);
    }
  }
  .more {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
</style>
