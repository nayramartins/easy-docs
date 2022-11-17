<script setup lang="ts">
const props = defineProps({
    component: Object
})
</script>

<template>
    <section class="details-page">
        <h1>Details</h1>
        <div>{{ component }}</div>
    </section>
</template>

<style scoped>
.details-page {
  color: #888;
}
</style>
