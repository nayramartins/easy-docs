<script setup lang="ts">
type Props = {
  required: boolean;
  default: unknown;
  type: () => unknown;
}

type Component = {
  props: Props
}

type ComponentProps = { [key: string]: unknown }

import { reactive } from 'vue';
import User from '../components/User.vue'
import InputType from '../components/InputType.vue'

const getProps = (component: Component, componentProps: ComponentProps) => (
  Object.entries(component.props).map(([name, value]) => {
    const { required, type: typeFn, default: defaultValue } = value as unknown as Props;
    const type = typeof typeFn()

    return { name, required, type, value: componentProps[name] || defaultValue }
  })
)

const userProps = reactive({
  name: 'Sky',
  surname: 'Blue'
})

const componentProps = getProps(User, userProps)
</script>

<template>
  <User v-bind="userProps" />

  <table>
    <thead>
      <tr>
        <th>
          name
        </th>
        <th>
          required
        </th>
        <th>
          type
        </th>
        <th>
          value
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="prop in componentProps" :key="prop.name">
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
          <InputType :type="prop.type" :value="prop.value" @input="userProps[prop.name] = $event" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: auto;
}
</style>
