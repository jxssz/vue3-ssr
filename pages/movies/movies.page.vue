<template>
  <div class="movielist-page-main">
    <h1>电影</h1>

    <n-button @click="click">返回首页</n-button>
    <n-button @click="navigate('/messageboard', { keepScrollPosition: true })">留言板</n-button>

    <n-list>
      <n-list-item v-for="item in movie.list" :key="item">
        <h3 @click="godetail(item.mid)">{{ item.title }}</h3>
        <span>{{ item.time }}</span>
        <!-- <a :href="item.url" target="_blank">
          <n-button size="tiny" type="success">原始链接</n-button>
        </a> -->
        <p>{{ item.description }}</p>
      </n-list-item>
    </n-list>
    <div class="page">
      <n-pagination
        show-quick-jumper
        :page-slot="5"
        v-model:page="page"
        :page-count="pageCount"
        @update:page="pageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { navigate } from "vite-plugin-ssr/client/router";
const props = defineProps({
  movie: {
    type: Object,
    default() {
      return {
        page: {}
      }
    }
  },
  routeParams: {
    type: Object,
    default() {
      return {}
    }
  }
})
const page = ref(Number(props.routeParams.page))
const pageCount = computed(() => {
  return parseInt((props.movie.page.count + props.movie.page.pageCount - 1) / props.movie.page.pageCount)
})
const click = () => {
  // 临时解决的js跳转
  navigate('/', { keepScrollPosition: true })
}
const pageChange = async (page) => {
  // document.body.scrollIntoView()
  navigate(`/movies/${page}`, { keepScrollPosition: false })
}
const godetail = (mid) => {
  navigate(`/detail/${mid}`, { keepScrollPosition: true })
}
</script>

<style lang="scss" scoped>
.movielist-page-main {
  h3 {
    cursor: pointer;
    &:hover {
      color: rgb(0, 133, 0);
    }
  }
  .page {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
}
</style>
