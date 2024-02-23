<template>
  <div class="flex flex-col break-inside-avoid">
    <BasicDivider />
    <h3 v-if="title" class="font-semibold text-sm my-4">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
import BasicDivider from "~/components/common/BasicDivider";

export default {
  name: "BlockTitle",
  components: { BasicDivider },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
