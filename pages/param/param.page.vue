<template>
  <div class="param-main">
    <h3>url参数</h3>
    <h5>{{ props.routeParams.param }}</h5>
  </div>
</template>

<style>
</style>
<script setup>
const props = defineProps({
  routeParams: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>
<style lang="scss" scoped>
.param-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    color: rgb(101, 184, 0);
  }
}
</style>
