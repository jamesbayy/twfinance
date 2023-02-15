<script setup lang ="ts">
import {ref} from "vue"
import { getStockFile } from "../api/api";
const data = ref()
const test = ()=>{
  data.value = getStockFile().then(res =>{
    return res
  })
}
</script>

<template>
<div>
  <div>{{ data }}</div>
  <button @click=test()>1</button>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
