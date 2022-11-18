<script setup lang="ts">
import { defineProps, reactive, defineEmits } from 'vue'
import type { InputTypes, InputDefaultValues } from '../types/input'

const INPUT_TYPES: InputTypes = {
  string: 'string',
  number: 'number',
  boolean: 'checkbox'
}

const DEFAULT_VALUES: InputDefaultValues = {
  string: '',
  boolean: false
}

const props = defineProps<{ type: string, value: unknown }>()

const input = reactive({ value: props.value ?? DEFAULT_VALUES[props.type] })
const inputType = INPUT_TYPES[props.type] || INPUT_TYPES.string

const emit = defineEmits(['input'])
const listener = props.type === 'boolean' ? 'change' : 'input'
</script>

<template>
  <input :type="inputType" v-model="input.value" v-on:[listener]="$emit('input', input.value)">
</template>
