<template>
  <div class="main-scroll">
    <!-- <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" /> -->
    <div class="main">
      <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
        <slot />
        <n-back-top right="40px" bottom="100px" />
      </n-config-provider>
    </div>
    <div class="footer">
      <span>仅供学习参考，一切数据均来自网络</span>
      <div>
        <a href="https://v3.cn.vuejs.org/" target="_block">Vue</a>&nbsp;
        <a href="https://cn.vitejs.dev/" target="_block">Vite</a>&nbsp;
        <a href="https://vite-plugin-ssr.com/" target="_block">vite-plugin-ssr</a>&nbsp;
        <a href="https://gitee.com/jxssz/prawns-love-learning" target="_block">源码</a>
      </div>
      <span>粤ICP备2021062248号</span>
    </div>
  </div>
</template>
<script setup>
import { zhCN, dateZhCN } from 'naive-ui'
import { defineComponent } from 'vue'
const activeKey = null
const menuOptions = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973'
  }
]
// export default defineComponent({
//   components: {
//     zhCN,
//     dateZhCN
//   },
//   setup() {
//     return {
//       zhCN,
//       dateZhCN
//     }
//   }
// })
</script>
<style lang="scss" scoped>
.main-scroll {
  width: 100%;
  // height: calc(100vh);
  // overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .main {
  }
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    a {
      // display: inline-block;
      &:hover {
        border-bottom: 1px solid rgb(189, 189, 189);
      }
    }
  }
}
</style>