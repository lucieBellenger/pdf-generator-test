<template>
  <div :class="[color, thickness, borderSize, axis]" />
</template>

<script>
export default {
  name: "BasicDivider",
  props: {
    color: {
      type: String,
      default: "border-philips-grey-200",
    },
    thickness: {
      type: String,
      default: "border-t",
    },
    length: {
      type: String,
      default: "full",
    },
    axis: {
      type: String,
      default: "HORIZONTAL",
      validator: function (value) {
        return ["HORIZONTAL", "VERTICAL"].includes(value.toUpperCase());
      },
    },
  },
  setup(props) {
    const borderSize = computed(() =>
      props.axis === "HORIZONTAL" ? `w-${props.length}` : `h-${props.length}`
    );

    return { borderSize };
  },
};
</script>

<style></style>
