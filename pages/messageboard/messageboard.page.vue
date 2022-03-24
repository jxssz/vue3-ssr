<template>
  <n-button @click="navigate('/', { keepScrollPosition: true })">首页</n-button>
  <n-button @click="navigate('/movies/1', { keepScrollPosition: true })">电影列表</n-button>
  <n-button @click="navigate('/about', { keepScrollPosition: true })">关于</n-button>
  <div class="movielist-page-main">
    名称（必填）：
    <n-input v-model:value="messageParams.name" type="text" placeholder="姓名或昵称" />邮箱：
    <n-input v-model:value="messageParams.email" type="text" placeholder="邮箱" />电话：
    <n-input v-model:value="messageParams.tel" type="text" placeholder="电话" />留言（必填）：
    <n-input v-model:value="messageParams.message" type="textarea" placeholder="留言" />
    <n-button type="primary" @click="updateMessage">留言</n-button>
    <div>
      <n-card v-for="item in getMessage" :key="item" :title="item.name">
        <p>邮箱：{{ item.email }}</p>
        <p>电话：{{ item.tel }}</p>
        <p>留言：{{ item.message }}</p>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { axios } from '@/util/axios'
import { reactive, ref, computed } from 'vue'
import { router } from '@/util/route'
import { navigate } from "vite-plugin-ssr/client/router";
const props = defineProps({
  getMessage: {
    type: Array,
    default() {
      return {
        page: []
      }
    }
  }
})

const messageParams = reactive({
  name: '',
  email: '',
  tel: '',
  message: ''
})

const updateMessage = async () => {
  if (!messageParams.name || !messageParams.message) {
    return
  }
  const { data } = await axios({
    url: 'api/movies/updatemessage',
    method: 'post',
    params: {
      ...messageParams
    }
  })
  if (data.status == 210) {
    // message.warning(data.message)
  } else {
    // message.success(data.message)
    navigate('/messageboard', { keepScrollPosition: true })
  }

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
