<script setup lang="ts">
type InputTypes = {
  [key: string]: string
}

type InputDefaultValues = {
  [key: string]: unknown
}

const InputTypes = {
  string: 'string',
  number: 'number',
  boolean: 'checkbox'
} as InputTypes;

const InputDefaultValues = {
  string: '',
  boolean: false
} as InputDefaultValues;

import { defineProps, reactive, defineEmits } from 'vue'

const props = defineProps<{ type: string, value: unknown }>()

const input = reactive({ value: props.value ?? InputDefaultValues[props.type] })
const inputType = InputTypes[props.type] || InputTypes.string

const emit = defineEmits(['input'])
const listener = props.type === 'boolean' ? 'change' : 'input'
</script>

<template>
  <input :type="inputType" v-model="input.value" v-on:[listener]="$emit('input', input.value)">
</template>
