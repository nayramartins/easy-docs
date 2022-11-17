<script setup lang="ts">
const props = defineProps({
  components: Array
})
</script>

<template>
    <h1>Home</h1>
    <div>
      {{ components }}
    </div>
</template>

<style scoped>
.home-view {
  color: #888;
}
</style>
