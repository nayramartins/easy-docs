<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ name: string, surname?: string, age?: number, showAge?: boolean }>(), {
  age: 1
})

const fullName = computed(() => `Hello${props.surname ? ` Mr. ${props.surname}` : ''} ${props.name}`)
const ageMessage = computed(() => `I see u r ${props.age} years old`)
</script>

<template>
  <h1>{{ fullName }}</h1>
  <p v-if="showAge">{{ ageMessage }}</p>
</template>
