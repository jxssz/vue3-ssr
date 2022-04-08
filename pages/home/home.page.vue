<template>
  <div class="home-main">
    <h3>异步数据</h3>
    <h5>{{ asyncDataDemo }}</h5>
  </div>
</template>

<style>
</style>
<script setup>
const props = defineProps({
  asyncDataDemo: {
    type: String
  }
})
</script>
<style lang="scss" scoped>
.home-main {
  display: flex;
  flex-direction: column;
  h5 {
    color: rgb(101, 184, 0);
  }
}
</style>
