<template>
  <div class="flex flex-col text-xxs py-4">
    <p v-if="id">ProjectID: {{ id }}</p>
    <p v-if="title" class="font-semibold">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectTitleId",
  props: {
    title: {
      type: String,
      default: "Interoperability & Integration Architect Philips Research",
    },
    id: {
      type: String,
      default: "PHIL023910293",
    },
  },
};
</script>

<style></style>
