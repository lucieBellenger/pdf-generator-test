<template>
  <span :class="[color]" class="text-xs">{{ formattedLabel }}</span>
</template>

<script>
export default {
  name: "FieldLabel",
  props: {
    fieldName: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "text-blue-200",
    },
  },
  setup(props) {
    const formattedLabel = computed(() => `[field: ${props.fieldName}]`);
    return { formattedLabel };
  },
};
</script>

<style></style>
