<template>
  <div class="flex flex-col p-5">
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between items-center">
        <img src="assets/icons/logos/philips.svg" />
        <img v-if="isRandstadLogo" src="assets/icons/logos/rsr.svg" />
        <span v-else-if="date" class="text-xs">{{ date }}</span>
      </div>
      <slot name="header"></slot>
    </div>
    <BasicDivider v-if="isDivider" class="mt-5" />
    <slot name="content"></slot>
  </div>
</template>

<script>
import BasicDivider from "~/components/common/BasicDivider.vue";

export default {
  name: "PageLayout",
  components: { BasicDivider },
  props: {
    isDivider: {
      type: Boolean,
      default: true,
    },
    date: {
      type: String,
      default: "",
    },
    isRandstadLogo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}
</style>
