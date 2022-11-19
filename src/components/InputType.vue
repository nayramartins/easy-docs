<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { InputTypes } from '../types/input'

const props = defineProps<{ type: string, modelValue?: unknown }>()
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <input :type="InputTypes[props.type]" v-model="model">
</template>
