<template>
  <n-button type="info" @click="click">Counter {{ state }}</n-button>
</template>

<script setup>
import { ref } from 'vue'
const state = ref(0)
const click = () => {
  // console.log(state.value)
  state.value = ++state.value
}
</script>
