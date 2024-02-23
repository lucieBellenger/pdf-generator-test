<template>
  <BasicResume></BasicResume>
</template>

<script>
import BasicResume from "~/components/resume/BasicResume.vue";

export default {
  name: "BasicTemplateResume",
  components: { BasicResume },
  setup() {
    const store = useApplicationStore();
    const route = useRoute();

    onMounted(() => {
      store.setSelectedApplicationId(Number(route.params.id));
    });
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
