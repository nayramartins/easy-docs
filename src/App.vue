<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Home from './views/Home.vue'
</script>

<template>
    <header class="app-header container">
        <router-link to="/">EasyDocs</router-link>
    </header>
    <router-view />
</template>

<style scoped>
.app-header {
    display: flex;
    padding: var(--spacing-05) 0;
}

.app-header a {
    color: var(--text-color-white);
}
</style>