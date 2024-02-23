<template>
  <BasicResume v-if="selectedApplication"></BasicResume>
</template>

<script>
import BasicResume from "~/components/resume/BasicResume.vue";

export default {
  components: { BasicResume },
  setup() {
    const { fontFamily, fontUrl } = useFonts();

    useHead({
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: true,
        },
        {
          rel: "stylesheet",
          href: fontUrl.value,
        },
      ],
    });

    const applicationStore = useApplicationStore();
    const talentStore = useTalentStore();

    const route = useRoute();

    onMounted(() => {
      applicationStore.setSelectedApplicationId(Number(route.params.id));
    });

    const selectedTalentId = computed(() => applicationStore.selectedTalentId);
    const selectedApplication = computed(
      () => applicationStore.selectedApplication
    );

    watch(
      selectedTalentId,
      (newVal) => {
        if (newVal) {
          talentStore.setSelectedTalentId(newVal);
        }
      },
      { immediate: true }
    );

    return { selectedApplication };
  },
};
</script>

<style>
@page {
  size: A4;
  margin: 0;
}
</style>
