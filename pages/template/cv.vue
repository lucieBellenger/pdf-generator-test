<template>
  <BasicResume></BasicResume>
</template>

<script>
import BasicResume from "~/components/resume/BasicResume.vue";

export default {
  name: "BasicTemplateResume",
  components: { BasicResume },
  setup() {
    return {};
  },
};
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}
</style>
