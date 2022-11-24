export type DefaultProps = { [key: string]: unknown }

export type ComponentProps = {
  required: boolean;
  default: unknown;
  type: () => unknown;
}

export type Component = {
  props: ComponentProps
}
