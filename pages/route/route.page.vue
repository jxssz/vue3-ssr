<template>
  <div class="seo-main">
    <h3>路由跳转</h3>
    <div>
      <p>
        方式1：
        <a href="/">返回首页</a>
      </p>
      方式2：
      <button @click="click">返回首页</button>
    </div>
  </div>
</template>

<style>
</style>
<script setup>
import { navigate } from "vite-plugin-ssr/client/router";
const click = () => {
  navigate('/', { keepScrollPosition: true })
}
</script>
<style lang="scss" scoped>
.seo-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #ccc;
  }
}
</style>
