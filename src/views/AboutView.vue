<script setup>
import { toRaw, reactive } from 'vue'
// import illustration from "@/assets/illustration.svg";
const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <component :is="toRaw()" />
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
