<script setup lang="ts">
import { reactive } from 'vue';
import type { Component, DefaultProps, ComponentProps } from '../types/playground'
import InputType from './InputType.vue'

const props = defineProps<{ component: Component, defaultProps?: DefaultProps }>()

const componentPropsList = Object.entries(props.component.props).map(([name, prop]) => {
  const { required, type: typeFn, default: value } = prop as ComponentProps;
  const type = typeof typeFn()

  return { name, required, type, value }
})

const componentModel = reactive(
  componentPropsList.reduce(
    (obj, prop) => ({ ...obj, [prop.name]: props.defaultProps?.[prop.name] || prop.value }),
    {},
  )
)
</script>

<template>
  <component :is="props.component" v-bind="componentModel" />

  <table>
    <thead>
      <tr>
        <th>
          Prop name
        </th>
        <th>
          Required?
        </th>
        <th>
          Type
        </th>
        <th>
          Value
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="prop in componentPropsList" :key="prop.name">
        <td>
          {{ prop.name }}
        </td>
        <td>
          {{ prop.required }}
        </td>
        <td>
          {{ prop.type }}
        </td>
        <td>
          <InputType :type="prop.type" v-model="componentModel[prop.name]" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: auto;
}

th, td {
  padding: var(--spacing-03) var(--spacing-04);
}

tbody tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.3);
}
</style>
