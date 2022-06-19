<script lang="ts">
export default {
  name: 'XButton'
}
</script>
<script setup lang="ts">

const handleClick = () => {
  console.log(1);
}


</script>

<template>
  <button @click="handleClick">hello</button>
</template>

<style scoped>

</style>