<template>
  <BasicHiringSheet :questions="questions" />
</template>

<script>
import BasicHiringSheet from "~/components/hiringSheet/BasicHiringSheet.vue";
export default {
  components: { BasicHiringSheet },
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
    const { fullName } = useTalent();

    const { visibleQuestions } = useQuestions();

    watch(
      selectedTalentId.value,
      (newVal) => {
        if (newVal) {
          talentStore.setSelectedTalentId(newVal);
        }
      },
      { immediate: true }
    );

    return { fullName, questions: visibleQuestions };
  },
};
</script>

<style></style>
