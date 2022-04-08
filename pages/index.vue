<template>
  <div class="main">
    <div class="header">
      <h1>服务端渲染</h1>
    </div>
    <div class="content">
      <a href="/">首页</a>
      |
      <a href="/seo">SEO</a>
      |
      <a href="/route">路由</a>
      |
      <a href="/param/1">传参</a>
    </div>
    <slot />
    <div class="footer">
      <div>
        <a href="https://v3.cn.vuejs.org/" target="_block">vue</a>
        |
        <a href="https://vitejs.cn/" target="_block">vite</a>
        |
        <a href="https://vite-plugin-ssr.com" target="_block">vite-plugin-ssr</a>
      </div>
      <h6>学习交流</h6>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 35vh;
    background-color: rgb(101, 184, 0);
    h1 {
      color: #fff;
      letter-spacing: 20px;
    }
  }
  .content {
    margin-top: 2vh;
    a {
      color: #ccc;
    }
  }
  .footer {
    position: absolute;
    bottom: 20px;
    text-align: center;
    a {
      color: #ccc;
    }
  }
}
</style>