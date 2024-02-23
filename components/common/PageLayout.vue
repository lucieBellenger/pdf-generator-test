<template>
  <div class="flex flex-col p-5">
    <div class="space-y-2">
      <div class="flex justify-between items-center">
        <img src="assets/icons/logos/philips.svg" />
        <img src="assets/icons/logos/rsr.svg" />
      </div>
      <slot name="header"></slot>
    </div>
    <BasicDivider />
    <slot name="content"></slot>
  </div>
</template>

<script>
import BasicDivider from "~/components/common/BasicDivider.vue";

export default {
  name: "PageLayout",
  components: { BasicDivider },
};
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}
</style>
